import { Wallet as AnchorWallet } from "@project-serum/anchor";
import { PublicKey, Transaction } from "@solana/web3.js";

export interface AnchorWallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

export default class Wallet implements AnchorWallet {

  constructor() {}

  async signTransaction(tx: Transaction): Promise<Transaction> {
    throw new Error('Not implemented.');
  }

  async signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    throw new Error('Not implemented.');
  }

  get publicKey(): PublicKey {
    throw new Error('Not implemented.');
  }
}
