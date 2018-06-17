import BigNumber from 'bignumber.js';


interface LocalContractStorageInterface {
    defineMapProperty: Function,
    defineProperties: Function,
    defineMapProperties: Function,
    defineProperty: Function
}

interface TransactionInterface {
    from: string,
    to: string,
    value: BigNumber,
    hash: string,
    nonce: number,
    timestamp: number,
    gasLimit: number,
    gasPrice: number
}

interface BlockInterface {
    height: number,
    timestamp: number,
    seed: number
}

interface BlockchainInterface {
    transaction: TransactionInterface,
    block: BlockInterface,
    verifyAddress: (string) => number,
    getAccountState: (string) => any,
    getPreBlockHash: (offset) => string,
    getPreBlockSeed: (offset) => string,
    transfer: (string, BigNumber) => boolean
}

interface EventInterface {
    Trigger: (string, any) => void
}

// TODO: crypto

declare var LocalContractStorage: LocalContractStorageInterface;
declare var Blockchain: BlockchainInterface;
declare var Event: EventInterface;