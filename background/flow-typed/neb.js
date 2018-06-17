import BigNumber from 'bignumber.js';


declare class LocalContractStorageInterface {
    defineMapProperty: Function,
    defineProperties: Function,
    defineMapProperties: Function,
    defineProperty: Function
}

declare class TransactionInterface {
    from: string,
    to: string,
    value: BigNumber,
    hash: string,
    nonce: number,
    timestamp: number,
    gasLimit: number,
    gasPrice: number
}

declare class BlockInterface {
    height: number,
    timestamp: number,
    seed: number
}

declare class BlockchainInterface {
    transaction: TransactionInterface,
    block: BlockInterface,
    verifyAddress(string): number,
    getAccountState(string): any,
    getPreBlockHash(number): string,
    getPreBlockSeed(number): string,
    transfer(string, BigNumber): boolean
}

declare class NebEventInterface {
    Trigger(string, any): void
}

// TODO: crypto

declare var LocalContractStorage: LocalContractStorageInterface;
declare var Blockchain: BlockchainInterface;
declare var Event: any; // NebEventInterface;
