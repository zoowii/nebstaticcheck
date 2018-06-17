// @flow
let flowParser = require('flow-parser')
let walk = require( 'estree-walker' ).walk

function CheckState(syntaxTree) {
    this.syntaxTree = syntaxTree
    this.contractVariableName = null
    this.storages = []
    this.contractApis = {} // apiName => functionDefinition // TODO: api args
    this.errors = []
}

CheckState.prototype = {
    addStorage(name, type) {
        this.storages.push({name: name, type: type})
    },
    addContractApi(name, functionDefinition) {
        this.contractApis[name] = functionDefinition
    },
    addError(line, error) {
        for(let err of this.errors) {
            if(err.loc.start.line === line) {
                return
            }
        }
        this.errors.push({loc: {start: {line: line}}, message: error})
    },
    hasStorage(name) {
        for(let storage of this.storages) {
            if(storage.name === name) {
                return true
            }
        }
        return false
    },
    getStorageType(name) {
        for(let storage of this.storages) {
            if(storage.name === name) {
                return storage.type
            }
        }
        return null
    },
    hasApi(apiName) {
        return this.contractApis[apiName] ? true : false
    }
}

let Identifier = 'Identifier'
let Literal = 'Literal'
let MemberExpression = 'MemberExpression'
let ExpressionStatement = 'ExpressionStatement'
let AssignmentExpression = 'AssignmentExpression'
let CallExpression = 'CallExpression'
let ObjectExpression = 'ObjectExpression'
let ThisExpression = 'ThisExpression'

function isAssignExpressionStatement(expr) {
    return expr.type === 'ExpressionStatement' && expr.expression.type==='AssignmentExpression'
}

function getContractVariableName(syntaxTree) {
    let body = syntaxTree.body
    for(let i=body.length-1;i>=0;i--) {
        let expr = body[i]
        if(isAssignExpressionStatement(expr)) {
            // 赋值表达式
            let left = expr.expression.left
            let right = expr.expression.right
            if(left.type === 'MemberExpression' && left.object.type===Identifier && left.property.type===Identifier && left.object.name==='module' && left.property.name==='exports'
                && right.type==='Identifier') {
                    // module.exports = ?
                    return right.name
                }
        }
    }
    return null
}

let LocalContractStorageMethods = [
    'rawGet', 'rawSet', 'defineProperty', 'defineProperties', 'defineMapProperty', 'defineMapProperties', 'del', 'get', 'set'
]

let LocalContractStorageTypes = ['Object', 'Map'] // storage的类型

function getContractStorages(checkState) {
    let syntaxTree = checkState.syntaxTree
    // find LocalContractStorage.define*** statements
    walk(syntaxTree, {
        enter(node, parent) {
            if(node && node.type === MemberExpression && node.object.type===Identifier && node.object.name==='LocalContractStorage' && node.property.type===Identifier) {
                let property = node.property.name
                if(LocalContractStorageMethods.indexOf(property)<0) {
                    throw new Error(`line ${node.loc.start.line} error, LocalContractStorage have no method ${property}`)
                }
                let parentArguments;
                if(parent && parent.type === CallExpression) {
                    parentArguments = parent.arguments
                } else {
                    return
                }
                switch(property) {
                    case 'defineProperty': {
                        if(parentArguments.length>=2) {
                            let secondArg = parentArguments[1]
                            if(secondArg.type == 'Literal') {
                                checkState.addStorage(secondArg.value, 'Object')
                            }
                        }
                    } break;
                    case 'defineProperties': {
                        if(parentArguments.length>=2) {
                            let secondArg = parentArguments[1]
                            if(secondArg.type === ObjectExpression) {
                                let properties = secondArg.properties
                                for(let prop of properties) {
                                    if(prop.type = 'Property' && (prop.key.type===Identifier || prop.key.type===Literal)) {
                                        let fieldName = prop.key.name
                                        checkState.addStorage(fieldName, 'Object')
                                    }
                                }
                            }
                        }
                    } break;
                    case 'defineMapProperty': {
                        if(parentArguments.length>=2) {
                            let secondArg = parentArguments[1]
                            if(secondArg.type == Literal) {
                                checkState.addStorage(secondArg.value, 'Map')
                            }
                        }
                    } break;
                    case 'defineMapProperties': {
                        if(parentArguments.length>=2) {
                            let secondArg = parentArguments[1]
                            if(secondArg.type === ObjectExpression) {
                                let properties = secondArg.properties
                                for(let prop of properties) {
                                    if(prop.type = 'Property' && (prop.key.type===Identifier || prop.key.type===Literal)) {
                                        let fieldName = prop.key.name || prop.key.value
                                        checkState.addStorage(fieldName, 'Map')
                                    }
                                }
                            }
                        }
                    } break;
                }
            }
        },
        leave(node, parent) {

        }
    })
}

function getContractApis(checkState) {
    let syntaxTree = checkState.syntaxTree
    // class <ContractVariableName> {apiFunc(...) {}, ...} or <ContractVariableName>.prototype = {apiName: ...}
    walk(syntaxTree, {
        enter(node, parent) {
            // 暂时只处理<ContractVariableName>.prototype = {apiName: ...}的形式
            if(isAssignExpressionStatement(node)) {
                // 赋值表达式
                let left = node.expression.left
                let right = node.expression.right
                if(left.type === MemberExpression && left.object.type===Identifier && left.property.type===Identifier 
                    && left.object.name===checkState.contractVariableName && left.property.name==='prototype'
                    && right.type===ObjectExpression) {
                        // <ContractVariableName>.prototype = {apiName: ...}
                        let apisObject = right
                        let apiProperties = apisObject.properties
                        for(let prop of apiProperties) {
                            if(prop.type === 'Property' && (prop.key.type===Identifier || prop.key.type === Literal)) {
                                let apiName = prop.key.name || prop.key.value
                                let apiFuncExpr = prop.value
                                if(apiFuncExpr.type === 'FunctionExpression') {
                                    checkState.addContractApi(apiName, apiFuncExpr)
                                }
                            }
                        }
                    }
            }
        },
        leave(node, parent) {

        }
    })
}

function checkExpressionType(expr) {
    // TODO: 推倒某个表达的类型
    if(expr.type === Literal) {
        if(expr.raw.indexOf('"')>=0 || expr.raw.indexOf("'")>=0 || expr.raw.indexOf('`')>=0) {
            return 'string'
        } else if(expr.raw==='null') {
            return 'null'
        } else if(expr.raw==='undefined') {
            return 'undefined'
        } else if(expr.value instanceof Number) {
            return 'number'
        }
    }
    // TODO
    return 'object'
}

// 判断某个MemberExpression表达式是否是访问合约的属性
function isVisitContractProperty(checkState, memberExpr) {
    if(memberExpr.type !== MemberExpression) {
        return false
    }
    // TODO: 当this不是合约对象，或者不是通过this而是通过其他对象比如self访问的时候
    if(memberExpr.object.type === ThisExpression && memberExpr.property.type === Identifier) {
        let propName = memberExpr.property.name || memberExpr.property.value
        return propName
    }
    
    return false
}

// 检查某个合约API的函数体中是否有类型错误
function checkContractApiFunction(checkState, apiName, functionDefinition) {
    walk(functionDefinition, {
        enter(node, parent) {
            // 检查 this.abc, this.abc = ..., this.abc(...)
            // TODO: var selfVar = this, .... self.abc
            // TODO: BigNumber type check, Blockchain.transaction.* infer, etc.
            switch(node.type) {
                case MemberExpression: {
                    let visitContractPropName = isVisitContractProperty(checkState, node)
                    if(visitContractPropName) {
                        if(!checkState.hasStorage(visitContractPropName) && !checkState.hasApi(visitContractPropName)) {
                            checkState.addError(node.loc.start.line, `contract doesn't have storage or api with name ${visitContractPropName}`)
                            return
                        }
                    }
                } break;
                case CallExpression: {
                    let callee = node.callee
                    let callArguments = node.arguments
                    let visitContractPropName = isVisitContractProperty(checkState, callee)
                    if(visitContractPropName) {
                        let callApiName = visitContractPropName
                        if(!checkState.hasApi(callApiName)) {
                            checkState.addError(node.loc.start.line, `contract doesn't have api with name ${callApiName}`)
                            return
                        }
                        // TODO: 检查api参数列表是否正确
                    }
                } break;
                case AssignmentExpression: {
                    let left = node.left
                    let right = node.right
                    if(left.type === MemberExpression) {
                        let rightType = checkExpressionType(right)
                        let assignContractPropName = isVisitContractProperty(checkState, left)
                        if(assignContractPropName) {
                            // 检查prop是否是storage，不是则报错
                            if(!checkState.hasStorage(assignContractPropName)) {
                                checkState.addError(node.loc.start.line, `contract doesn't have storage with name ${assignContractPropName}`)
                                return
                            }
                            // 检查prop的类型是否一致
                            let storageType = checkState.getStorageType(assignContractPropName)
                            if(storageType==='Map' && (rightType!='map' && rightType!=='object' && rightType!=='null' && rightType!=='undefined')) {
                                checkState.addError(node.loc.start.line, `contract storage ${assignContractPropName} accepted invalid value type`)
                                return
                            }
                        }
                    }
                } break;
            }
        },
        leave(node, parent) {

        }
    })
}


function checkContract(contractCode) {
    // TODO: run flow path in backend. use flow as a web service
    let syntaxTree = flowParser.parse(contractCode, {
        esproposal_decorators: true,
        esproposal_class_instance_fields: true,
        esproposal_class_static_fields: true,
        esproposal_export_star_as: true,
        types: true,
    })
    
    let checkState = new CheckState(syntaxTree)
    if(syntaxTree.errors.length>0) {
        checkState.errors = syntaxTree.errors
        return checkState
    }
    // iterate syntax tree to get exported contract type
    let contractVariableName = getContractVariableName(syntaxTree)
    checkState.contractVariableName = contractVariableName

    // get contract storages
    getContractStorages(checkState)
    // get contract apis
    getContractApis(checkState)
    // iterate contract apis to check api and storage usage(can't use undefined api or storage, maybe typo error)
    for(let apiName in checkState.contractApis) {
        let apiFunc = checkState.contractApis[apiName]
        checkContractApiFunction(checkState, apiName, apiFunc)
    }
    console.log(checkState)
    return checkState
}

module.exports = {checkContract}
