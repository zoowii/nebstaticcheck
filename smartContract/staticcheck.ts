"use strict";

import BigNumber from 'bignumber.js';

interface LocalContractStorageInterface {
    defineMapProperty: Function
}

interface TransactionInterface {
    from: string
    to: string
    value: BigNumber
    hash: string
    nonce: number
    timestamp: number

}

interface BlockInterface {
    height: number
    timestamp: number
    seed: number
}

interface BlockchainInterface {
    transaction: TransactionInterface
    block: BlockInterface
    verifyAddress: (string) => number
    transfer: (string, BigNumber) => boolean
}

interface EventInterface {
    Trigger: (string, any) => void
}

declare var LocalContractStorage: LocalContractStorageInterface;
declare var Blockchain: BlockchainInterface;
declare var Event: EventInterface;

// 用户设置
class UserConfig {
    address: string
    settings: Map<string, object>
    contractSources: Map<string, any> // 用户保存的合约源码列表, name => {name, source, time}

    constructor(text) {
        if(text) {
            let obj = JSON.parse(text)
            this.address = obj.address
            this.settings = obj.settings
            this.contractSources = obj.contractSources
        } else {
            this.settings = {} as Map<string, object>
            this.contractSources = {} as Map<string, any>
        }
    }
}


var ContractService = function () {
    LocalContractStorage.defineMapProperty(this, "config", {
        parse: function (text) {
            return JSON.parse(text);
        },
        stringify: function (o) {
            return JSON.stringify(o);
        }
    });
    // userAddress => UserConfig
    LocalContractStorage.defineMapProperty(this, "userConfigRepo", {
        parse: function (text) {
            return new UserConfig(text);
        },
        stringify: function (o) {
            return JSON.stringify(o);
        }
    });
    
};


ContractService.prototype = {
    init: function () {
        this.config.set("owner", Blockchain.transaction.from); // 合约所有者
    },

    getOwner: function () {
        return this.config.get('owner');
    },
    getConfigOfUser(userAddress) {
        return this.userConfigRepo.get(userAddress)
    },
    setConfigOfUser(key, value) {
        let from = Blockchain.transaction.from
        let userConfig: UserConfig = this.getConfigOfUser(from)
        if(!userConfig) {
            userConfig = new UserConfig(null)
        }
        if(!key) {
            throw new Error("invalid config key")
        }
        userConfig.settings[key] = value
        this.userConfigRepo.set(from, userConfig)
        return userConfig
    },
    setUserContractSource(name, source) {
        let from = Blockchain.transaction.from
        let userConfig: UserConfig = this.getConfigOfUser(from)
        if(!userConfig) {
            userConfig = new UserConfig(null)
        }
        if(!name) {
            throw new Error("invalid source name")
        }
        userConfig.contractSources[name] = {name: name, source: source, time: Blockchain.transaction.timestamp}
        this.userConfigRepo.set(from, userConfig)
        return userConfig 
    },
    login: function() {
        
    },
    donate: function () {
        var value = Blockchain.transaction.value;
        if (value.gt(new BigNumber(0))) {
            Blockchain.transfer(this.config.get('owner'), value);
        }
    },
    donateToUser: function (userAddress) {
        if (Blockchain.verifyAddress(userAddress) !== 87) {
            throw new Error("invalid user address");
        }
        var value = Blockchain.transaction.value;
        if (value.gt(new BigNumber(0))) {
            Blockchain.transfer(userAddress, value);
        }
    }
};

declare var module: any

module.exports = ContractService;
