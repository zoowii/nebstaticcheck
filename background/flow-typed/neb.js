import BigNumber from 'bignumber.js';


declare interface LocalContractStorageInterface {
    defineMapProperty: Function,
    defineProperties: Function,
    defineMapProperties: Function,
    defineProperty: Function
}

declare interface TransactionInterface {
    from: string,
    to: string,
    value: BigNumber,
    hash: string,
    nonce: number,
    timestamp: number,
    gasLimit: number,
    gasPrice: number
}

declare interface BlockInterface {
    height: number,
    timestamp: number,
    seed: number
}

declare interface BlockchainInterface {
    transaction: TransactionInterface,
    block: BlockInterface,
    verifyAddress: (string) => number,
    getAccountState: (string) => any,
    getPreBlockHash: (number) => string,
    getPreBlockSeed: (number) => string,
    transfer: (string, BigNumber) => boolean
}

declare interface EventInterface {
    Trigger: (string, any) => void
}

// TODO: crypto

declare var LocalContractStorage: LocalContractStorageInterface;
declare var Blockchain: BlockchainInterface;
declare var Event: EventInterface;