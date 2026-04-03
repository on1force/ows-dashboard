export enum OwsOperation {
  CREATE_WALLET = "create_wallet",
  IMPORT_WALLET = "import_wallet",
  EXPORT_WALLET = "export_wallet",
  DELETE_WALLET = "delete_wallet",
  RENAME_WALLET = "rename_wallet",
  BROADCAST_TRANSACTION = "broadcast_transaction",
}

export interface OwsLog<T extends OwsOperation> {
  timestamp: string;
  wallet_id: string;
  operation: T;
  details: T extends OwsOperation.CREATE_WALLET ? string : never;
}

export interface OwsWallet {
  ows_version: number;
  id: string;
  name: string;
  created_at: string;
  accounts: Account[];
  crypto: Crypto;
  key_type: string;
}

export interface Account {
  account_id: string;
  address: string;
  chain_id: string;
  derivation_path: string;
}

export interface Crypto {
  auth_tag: string;
  cipher: string;
  cipherparams: Cipherparams;
  ciphertext: string;
  kdf: string;
  kdfparams: Kdfparams;
}

export interface Cipherparams {
  iv: string;
}

export interface Kdfparams {
  dklen: number;
  n: number;
  p: number;
  r: number;
  salt: string;
}
