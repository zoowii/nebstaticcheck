let nebChecker = require('./typechecker/nebchecker')

module.exports = nebChecker

let demo = `

function Item(text) {
    if(text) {
        let obj = JSON.parse(text)
        this.id = obj.id
    } else {
        this.id = null
    }
}
Item.prototype = {
    toString: function() {
        return JSON.stringify(this)
    }
}

function ContractService() {
    // Demo
    LocalContractStorage.defineProperties(this, {
        _name: null,
    })
    LocalContractStorage.defineProperty(this, 'p1', null)
    LocalContractStorage.defineProperty(this, 'p2', {
        parse: function (value) {
            return new BigNumber(value);
        },
        stringify (o) {
            return o.toString(10);
        }
    })
    LocalContractStorage.defineProperty(this, 'p3', {
        parse: function (value) {
            return new BigNumber(value);
        },
        stringify (o) {
            return 1
        }
    })
    
    LocalContractStorage.defineMapProperties(this, {
        "balances": {
            parse: function (value) {
                return new BigNumber(value);
            },
            stringify: function (o) {
                return o.toString(10);
            }
        },
        "allowed": {
            parse: function (value) {
                return new Allowed(value);
            },
            stringify: function (o) {
                return new BigNumber(123); // o.toString();
            }
        }
    })
    LocalContractStorage.defineProperty(this, 'config', null)
    LocalContractStorage.defineMapProperty(this, 'configMap', null)
    
}

ContractService.prototype = {
    init: function() {
        this._name = 'Demo'
        this._age = 123 // ERROR
    },
    hello(name) {
        return 'world' + name
    }
}
module.exports = ContractService          
            
`
let test = true
if (test) {
    let result = nebChecker.checkContract(demo)
    console.log(result)
    for (let apiName in result.contractApis) {
        let apiFunc = result.contractApis[apiName]
        console.log(JSON.stringify(apiFunc.params))
    }
}

global.nebchecker = nebChecker
