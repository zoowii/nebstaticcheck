var useTestNet = window.location.search.indexOf('testnet=true') >= 0 ? true : false;

var nebulas = require("nebulas"),
    Account = nebulas.Account,
    neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest(useTestNet ? "https://testnet.nebulas.io" : "https://mainnet.nebulas.io"));

var NebPay = require("nebpay");
var nebPay = new NebPay();

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function explorerUrlForAddress(address) {
    return "https://explorer.nebulas.io/#/address/" + address;
}

Vue.component('merchants-list', {
    data: function () {
        return {
        };
    },
    computed: {

    },
    methods: {
        viewMerchantDetail: function (game) {
            this.$emit('on-view-merchant', game);
        },
        explorerUrlForAddress: function (address) {
            return window.explorerUrlForAddress(address);
        },
        weiToNas: function (value) {
            return new BigNumber(value).div(new BigNumber(1000000000000000000)).toString();
        }
    },
    props: ['merchants'],
    template: `
    <div class="games-container">
        <div v-if="!merchants.length">
            <el-alert title="目前没有商户，你可以考虑创建一个" type="warning">
            </el-alert>
        </div>
        <div class="card" v-for="item in merchants" :key="item.id" style="width: 200px; min-width: 200px; float: left; display: inline-block; margin: 5px;">
            <div class="card-body" style="height: 230px; text-align: center;">
                <p style="height: 50px;">商户名称: {{item.name}}</p>
                <div style="font-size: 12px; color: #aaaaaa; padding: 5px 0;">
                    创建人: 
                    <a v-bind:href="explorerUrlForAddress(item.creatorAddress)" target="_blank">{{item.creatorAddress}}</a>
                </div>
                <p>创建时间: {{new Date(1000 * item.time).toLocaleDateString()}}</p>
                <div style="margin-top: 10px;">
                    <el-button type="primary" size="mini" @click="viewMerchantDetail(item)">查看</el-button>
                </div>
            </div>
        </div>
        <div class="clear clearfix"></div>
    </div>
    `
});

Vue.component('order-simple-panel', {
    data: function () {
        return {};
    },
    methods: {
        isPay: function () {
            return this.order && this.order.type === 'simple_pay';
        },
        typeText: function () {
            switch (this.order.type) {
                case 'simple_pay': return "付款";
                case 'single_receive': return '收款';
                case 'aa_receive': return 'AA收款';
                default: return "订单";
            }
        },
        stateText: function () {
            if (this.order.finished) {
                return '(已完成)';
            }
            if (this.order.deleted) {
                return '(已取消)';
            }
            return '';
        },
        explorerUrlForAddress: function (address) {
            return window.explorerUrlForAddress(address);
        },
        weiToNas: function (value) {
            return (new BigNumber(value).div(new BigNumber(1000000000000000000))).toString();
        }
    },
    props: ["order"],
    template: `
    <div>
        <p>{{typeText()}}{{weiToNas(order.payAmount || order.toReceiveAmount || 0)}}NAS{{stateText()}}
            <span style="color: #aaaaaa;">{{new Date(1000*order.time).toLocaleDateString()}}</span>
        </p>
    </div>
    `
});

Vue.component('Loading', {
    data: function () {
        return {};
    },
    methods: {
    },
    props: ["show"],
    template: `
    <div class="loading-img" style="
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url('img/loading.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150px;
  opacity: 0.8;" v-if="show"></div>
    `
});

Vue.component('order-card', {
    data: function () {
        return {};
    },
    methods: {
        playMusicByUrl: function (url) {
            window.open(url, '_blank');
        }
    },
    props: ["order"],
    template: `
    <el-card shadow="always" style="word-break: keep-all; height: 200px;">
        <div v-if="order.type !== 'image' && order.type !== 'music'">
            <a v-bind:href="order.url" target="_blank">{{order.title}}</a>
            <br />
            <p style="margin-top: 30px;">{{new Date(order.time*1000).toLocaleDateString()}}</p>
        </div>
        <div v-if="order.type==='music'">
            <a v-bind:href="order.url" target="_blank">{{order.title}}</a>
            <br />
            <p style="margin-top: 30px;">{{new Date(order.time*1000).toLocaleDateString()}}</p>
            <el-button type="primary" size="mini" @click="playMusicByUrl(order.url)">播放</el-button>
        </div>
        <div v-if="order.type==='image'">
            <a v-bind:href="order.url" target="_blank">
                <img v-bind:src="order.url" style="width: 100%; height: 100%;" alt="点击查看大图">
                <br />
                <p style="margin-top: 30px;">{{order.title}}</p>
            </a>
        </div>
    </el-card>
    `
});

var app = new Vue({
    el: '#app',
    components: {
    },
    data: function () {
        var authorAddress = 'n1ctHe1CYKwnaTYHpvQ4VoqFCJ8Kcy66zJa';
        var dappAuthorAccount = Account.fromAddress(authorAddress);
        var simulateFromAddress = dappAuthorAccount.getAddressString(); // 模拟执行时使用的地址

        var dappTestNetAddress = "";
        var dappMainNetAddress = "n1hoFFodyZ4WuU79T7o2XSskoQddFX18N8h"; // tx hash: 4d54cebf3ce2b482946f18d4b0f4b002b053cceb2df13d9ac191aa013b6c5ed8

        var dappAddress = useTestNet ? dappTestNetAddress : dappMainNetAddress;

        return {
            name: 'nebcontractchecker',
            title: '星云合约静态检查工具',
            repoUrl: 'https://github.com/zoowii/nebstaticcheck',
            flowUrl: 'http://120.55.52.74:3000/flow',
            nebExtensionInstalled: true,
            authorAddress: authorAddress,
            dappAuthorAccount: dappAuthorAccount,
            simulateFromAddress: simulateFromAddress,
            useTestNet: useTestNet,
            dappAddress: dappAddress,
            appDescription: '',
            appAboutMe: `
            `,
            curTabIndex: 'merchants',
            activeHomeFavoriteNames: [],
            activeUserCreatedFavoriteNames: [],
            activeUserWatchedFavoriteNames: [],
            searchMerchantsForm: { address: '' },
            createMerchantForm: { name: '' },
            currentUserAddress: '',
            allMerchantList: [],
            myOrders: [],
            userCreatedMerchantsList: [],
            userWatchedMerchantsList: [],
            currentShowMerchantsInfo: null,
            currentShowMerchantOrders: [],
            currentEditingMerchantInfo: null,
            createOrderForm: { type: 'url', toReceiveUserAddresses: [] },
            copingText: '',
            loading: true,

            checkError: '',
            isTypeScript: true,
            showMyContractsDialog: false,
            myContracts: [],
            checkState: null,
            toRunApiName: null,
        };
    },
    watch: {
        isTypeScript(val) {
            if (this.isTypeScript) {
                this.editor.session.setMode("ace/mode/typescript");
            } else {
                this.editor.session.setMode("ace/mode/javascript");
            }
        }
    },
    created: function () {
        var self = this;
        this.loading = false
        setTimeout(function () {
            if (!window.webExtensionWallet) {
                self.showErrorInfo('扩展钱包未安装，请先安装');
                return
            }
            self.nebExtensionInstalled = true;

            window.postMessage({
                "target": "contentscript",
                "data": {},
                "method": "getAccount",
            }, "*");
            window.addEventListener('message', function (e) {
                if (e.data && e.data.data) {
                    if (e.data.data.account) {//这就是当前钱包中的地址
                        self.currentUserAddress = e.data.data.account;

                        window.currentUserAddress = self.currentUserAddress;
                        self.simulateFromAddress = self.currentUserAddress;
                        if (self.currentUserAddress) {
                            self.loadMyContracts(self.currentUserAddress)
                        }
                    }
                }
            });
        }, 3000);
        var editor = ace.edit("editor-container");
        this.editor = editor
        window.editor = editor
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
        editor.resize()
        this.newContractSource(null)
        this.checkContractSource()
    },
    methods: {
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleSelect(key, keyPath) {
            var url = new URL(window.location.href);
            url.searchParams.set('merchant_id', '');
            url.searchParams.set('order_id', '');
            history.pushState({ 'merchant_id': '', 'order_id': '' }, key, url.toString());

            this.curTabIndex = key;
            if (key === 'my_orders' && this.currentUserAddress) {
                this.listMerchantsUserCreated(this.currentUserAddress)
            }
        },
        handleListMerchantsChange: function () {

        },
        explorerUrlForAddress: function (address) {
            return window.explorerUrlForAddress(address);
        },
        onSubmitSearchMerchants: function () {
            this.listMerchantsUserCreated(this.searchMerchantsForm.address);
            this.listOrdersUserJoined(this.searchMerchantsForm.address);
        },
        goToCreateMerchants: function () {
            this.curTabIndex = 'create_merchant';
            this.createMerchantForm = {};
        },
        showErrorInfo: function (error) {
            this.loading = false
            console.log('info: ', error);
            if (error.msg) {
                error = error.msg;
            }
            error = error || "出现错误";
            var errorStr = error.toString();
            if (errorStr.indexOf('payId ') === 0) {
                return;
            }
            this.$notify.error({
                title: '错误',
                message: errorStr
            });
        },
        showSuccessInfo: function (msg) {
            console.log('info: ', msg);
            if (msg.msg) {
                msg = msg.msg;
            }
            msg = msg || "操作成功";
            var msgStr = msg.toString();
            if (msgStr.indexOf('payId ') === 0 && msgStr.endsWith(' does not exist')) {
                return;
            }
            this.$notify({
                title: '通知',
                message: msgStr,
                type: 'success'
            });
        },
        updateCurrentUserAddress: function () {
            if (window.currentUserAddress) {
                this.currentUserAddress = window.currentUserAddress;
                if (this.currentUserAddress) {
                    this.loadMyContracts()
                }
            }
        },
        loadMyContracts: function () {
            if (!this.currentUserAddress) {
                return;
            }
            var value = "0";
            var gasPrice = "1000000"
            var gasLimit = "2000000"
            var callFunction = "getConfigOfUser";
            var callArgs = JSON.stringify([this.currentUserAddress]);
            var contract = {
                "function": callFunction,
                "args": callArgs
            }
            var self = this;
            this.loading = true;
            neb.api.call(this.simulateFromAddress, this.dappAddress, value, '0', gasPrice, gasLimit, contract).then(function (resp) {
                self.loading = false
                console.log(resp);
                if (resp.execute_err.length > 0) {
                    throw new Error(resp.execute_err);
                }
                var result = JSON.parse(resp.result);
                if (!result) {
                    self.myContracts = []
                    return
                }
                self.myContracts = []
                for (let contractName in result.contractSources) {
                    self.myContracts.push(result.contractSources[contractName])
                }
                self.myContracts.sort(function (a, b) {
                    return b.time - a.time;
                });
            }).catch(function (err) {
                self.showErrorInfo(err.message);
            });
        },
        copyMerchantsLink: function (e, merchants) {
            this.copingText = window.location.href;
            $(".copyTextInput").val(this.copingText);
            $(".copyTextInput").select();
            document.execCommand('copy');
            this.showSuccessInfo("链接已复制到您的剪切板");
        },
        copyOrderLink: function (e, order) {
            this.copingText = window.location.href;
            $(".copyTextInput").val(this.copingText);
            $(".copyTextInput").select();
            document.execCommand('copy');
            this.showSuccessInfo("链接已复制到您的剪切板");
        },
        isPayOrder: function (order) {
            return order && order.type === 'simple_pay';
        },
        orderTypeText: function (order) {
            switch (order.type) {
                case 'simple_pay': return "付款";
                case 'single_receive': return '收款';
                case 'aa_receive': return 'AA收款';
                default: return "订单";
            }
        },
        orderStateText: function (order) {
            if (order.finished) { return "已完成"; }
            if (order.deleted) { return "已取消"; }
            return "待支付";
        },
        weiToNas: function (value) {
            return (new BigNumber(value).div(new BigNumber(1000000000000000000))).toString();
        },
        toSelectContractSource() {
            this.showMyContractsDialog = true
        },
        saveContractSource: function () {
            // 保存合约源码
            let editor = this.editor
            let code = editor.getValue()
            var self = this;
            function sendTx(name) {

                var callFunction = "setUserContractSource";
                var callArgs = JSON.stringify([name, code])
                var value = '0'
                var contract = {
                    "function": callFunction,
                    "args": callArgs
                };

                directCallOnChainTx(self.dappAddress, value, callFunction, callArgs,
                    function (data) {
                        self.showSuccessInfo("合约保存已提交");
                    }, function (data) {
                        self.showSuccessInfo("合约保存成功");
                        self.updateCurrentUserAddress();
                    }, self.showErrorInfo);
            }
            this.$prompt('请输入合约文件名', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /\w[\w\d]*/,
                inputErrorMessage: '文件名称不正确',
            }).then((data) => {
                sendTx(data.value);
            }).catch(() => {
                self.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        openContractSource(contractInfo) {
            this.openedContractName = contractInfo.name
            let code = contractInfo.source
            this.showMyContractsDialog = false
            this.newContractSource(code)
            this.checkContractSource()
        },
        newContractSource(source) {
            this.checkError = ''
            let editor = this.editor
            if (!source) {
                this.openedContractName = ''
            }
            let code = source || `
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
            return new Item(value);
        },
        stringify (o) {
            return o.toString();
        }
    })
    LocalContractStorage.defineProperty(this, 'p3', {
        parse: function (value) {
            return new BigNumber(value);
        },
        stringify (o) {
            return new BigNumber(o) // error, storage stringify return type must be string
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
                return o.toString();
            }
        }
    })
    LocalContractStorage.defineProperty(this, 'config', null)
    LocalContractStorage.defineMapProperty(this, 'configMap', null)
    
}

ContractService.prototype = {
    init: function() {
        console.log('hi, init')
        console.log('nebulas, contract')
        this._name = 'Demo'
        this._age = 123 // ERROR
    },
    hello(name) {
        console.log('hi')
        console.log('nebulas')
        return 'world' + name
    },
}
module.exports = ContractService          
            `
            editor.setValue(code)
        },
        checkContractSource() {
            let self = this
            let editor = this.editor
            let code = editor.getValue()
            try {
                let checkState = nebchecker.checkContract(code)
                this.checkState = checkState
                console.log(checkState)
                if (checkState.errors.length > 0) {
                    let errorBuilder = ''
                    for (let err of checkState.errors) {
                        if (err && err.message && err.loc && err.loc.start) {
                            errorBuilder += `<p>line ${err.loc.start.line} error: ${err.message}</p>`
                        }
                    }
                    this.checkError = errorBuilder
                } else {
                    this.checkError = '无错误'
                }
                // 更新合约API列表，合约storage列表
                let $panel = $("#contract-structure-panel");
                let $storagesList = $panel.find('.contract-storages-list')
                let $apisList = $panel.find('.contract-api-list')
                $storagesList.html('')
                $apisList.html('')
                for (let storage of checkState.storages) {
                    let $item = $(`<li class="list-group-item">${storage.name}: ${storage.type}</li>`)
                    $storagesList.append($item)
                }
                if (checkState.storages.length < 1) {
                    $storagesList.append(`<li class="list-group-item">暂无</li>`)
                }
                let apisCount = 0
                let contractApiInfos = []
                let contractApiMapping = {}
                for (let contractApiName in checkState.contractApis) {
                    let apiFunc = checkState.contractApis[contractApiName]
                    let apiParams = []
                    if (apiFunc && apiFunc.params) {
                        for (let p of apiFunc.params) {
                            if (p && p.name) {
                                apiParams.push(p.name)
                            } else {
                                apiParams.push('object')
                            }
                        }
                    }
                    apisCount++
                    let $item = $(`<li class="list-group-item">${contractApiName}(${apiParams.join(',')})</li>`)
                    $apisList.append($item)
                    let info = {
                        name: contractApiName,
                        args: apiParams,
                    }
                    contractApiMapping[contractApiName] = info
                    contractApiInfos.push(info)
                }
                checkState.contractApiInfos = contractApiInfos
                checkState.contractApiMapping = contractApiMapping
                checkState.inputedApiArgs = {}
                if (this.toRunApiName && !checkState.contractApis[this.toRunApiName]) {
                    this.toRunApiName = null
                }
                if (apisCount < 1) {
                    $apisList.append(`<li class="list-group-item">暂无</li>`)
                }
                if (this.isTypeScript) {
                    axios.post(this.flowUrl, { contract: code })
                        .then(d => {
                            let data = d.data
                            if (data.error) {
                                if (self.checkError === '无错误') {
                                    self.checkError = ''
                                }
                                let errorPrefix = 'Error -----------------------------------------------------------------------------------------------------------'
                                let errorLines = data.error.split('\n')
                                for (let errLine of errorLines) {
                                    if (errLine.indexOf(errorPrefix) === 0) {
                                        errLine = errLine.substring(errorPrefix.length)
                                    }
                                    self.checkError += `<p>${errLine}</p>`
                                }
                            }
                        });
                }

            } catch (e) {
                this.checkError = e.message
            }
        },
        runContractApiLocally() {
            if (!this.toRunApiName) {
                return this.showErrorInfo("Please select api to run")
            }
            let self = this
            let editor = this.editor
            let code = editor.getValue()
            let args = []
            let argNames = this.checkState.contractApiMapping[this.toRunApiName].args
            for (let argName of argNames) {
                args.push(this.checkState.inputedApiArgs[argName])
            }
            var block = {
                timestamp: 0,
                height: 1
            }

            var transaction = {
                hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
                from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
                to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
                value: "10",
                nonce: 1,
                timestamp: 1527077193,
                gasPrice: "1000000",
                gasLimit: "20000"
            }
            let nvm = new nebulas.NVM(block, transaction)
            console.log('args: ', args)
            let res = undefined
            let oldLog = console.log
            let logBuilder = ''
            console.log = function (data) {
                logBuilder += data + '\n'
            }
            try {
                if (this.toRunApiName === 'init') {
                    res = nvm.deploy(code, JSON.stringify(args))
                } else {
                    res = nvm.run(code, this.toRunApiName, JSON.stringify(args))
                }
            } finally {
                console.log = oldLog
            }
            let resStr = '' + res
            let html = `<div><p>Result: <br/>${resStr.replace('\n', '<br/>')}</p><p>Logs: <br/><code>${logBuilder.replace('\n', '<br/>')}</code></p></div>`
            this.$alert(html, 'Execute Result', {
                dangerouslyUseHTMLString: true
              })
        },
        loginToDapp: function () {
            var self = this
            directCallOnChainTx(self.dappAddress, '0', 'donate', JSON.stringify([]),
                function (data) {
                    self.showSuccessInfo("登录成功")
                }, function (data) {
                    self.updateCurrentUserAddress();
                }, self.showErrorInfo);
        },
        goToUrlInBlankPage: function (url) {
            window.open(url, '_blank')
        },
        donate: function () {
            var toAddress = this.authorAddress
            var value = "1";
            var gas_price = "1000000";
            var gas_limit = "2000000";
            var self = this;
            callOnChainTx(this.simulateFromAddress, toAddress, value, '0', gas_price, gas_limit, null, null,
                function (data) {
                    self.showSuccessInfo("捐赠成功，你得到了一份作者的感谢！");
                }, function (data) {
                    self.updateCurrentUserAddress();
                }, this.showErrorInfo);
        }
    }
});

if (app.$data) {
    document.title = app.$data.title;
}
