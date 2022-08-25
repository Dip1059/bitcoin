export type rpcOpts = {
  host: string
  port?: string | number
  user?: string
  pass?: string
  path?: string
  wallet?: string
  ssl: boolean
  sslStrict?: boolean
  sslCa?: Buffer
  timeout?: number
}

export class Client {
  constructor(opts: rpcOpts);
  addMultiSigAddress(...args: any[]): Promise<any>;
  addNode(...args: any[]): Promise<any>;
  backupWallet(...args: any[]): Promise<any>;
  createMultiSig(...args: any[]): Promise<any>;
  createRawTransaction(...args: any[]): Promise<any>;
  decodeRawTransaction(...args: any[]): Promise<any>;
  decodeScript(...args: any[]): Promise<any>;
  dumpPrivKey(...args: any[]): Promise<any>;
  dumpWallet(...args: any[]): Promise<any>;
  encryptWallet(...args: any[]): Promise<any>;
  estimateFee(...args: any[]): Promise<any>;
  estimatePriority(...args: any[]): Promise<any>;
  generate(...args: any[]): Promise<any>;
  getAccount(...args: any[]): Promise<any>;
  getAccountAddress(...args: any[]): Promise<any>;
  getAddedNodeInfo(...args: any[]): Promise<any>;
  getAddressesByAccount(...args: any[]): Promise<any>;
  getBalance(...args: any[]): Promise<any>;
  getBestBlockHash(...args: any[]): Promise<any>;
  getBlock(...args: any[]): Promise<any>;
  getBlockchainInfo(...args: any[]): Promise<any>;
  getBlockCount(...args: any[]): Promise<any>;
  getBlockHash(...args: any[]): Promise<any>;
  getBlockTemplate(...args: any[]): Promise<any>;
  getChainTips(...args: any[]): Promise<any>;
  getConnectionCount(...args: any[]): Promise<any>;
  getDifficulty(...args: any[]): Promise<any>;
  getGenerate(...args: any[]): Promise<any>;
  getInfo(...args: any[]): Promise<any>;
  getMempoolInfo(...args: any[]): Promise<any>;
  getMiningInfo(...args: any[]): Promise<any>;
  getNetTotals(...args: any[]): Promise<any>;
  getNetworkInfo(...args: any[]): Promise<any>;
  getNetworkHashPs(...args: any[]): Promise<any>;
  getNewAddress(...args: any[]): Promise<any>;
  getPeerInfo(...args: any[]): Promise<any>;
  getRawChangeAddress(...args: any[]): Promise<any>;
  getRawMemPool(...args: any[]): Promise<any>;
  getRawTransaction(...args: any[]): Promise<any>;
  getReceivedByAccount(...args: any[]): Promise<any>;
  getReceivedByAddress(...args: any[]): Promise<any>;
  getTransaction(...args: any[]): Promise<any>;
  getTxOut(...args: any[]): Promise<any>;
  getTxOutProof(...args: any[]): Promise<any>;
  getTxOutSetInfo(...args: any[]): Promise<any>;
  getUnconfirmedBalance(...args: any[]): Promise<any>;
  getWalletInfo(...args: any[]): Promise<any>;
  help(...args: any[]): Promise<any>;
  importAddress(...args: any[]): Promise<any>;
  importPrivKey(...args: any[]): Promise<any>;
  importWallet(...args: any[]): Promise<any>;
  keypoolRefill(...args: any[]): Promise<any>;
  keyPoolRefill(...args: any[]): Promise<any>;
  listAccounts(...args: any[]): Promise<any>;
  listAddressGroupings(...args: any[]): Promise<any>;
  listLockUnspent(...args: any[]): Promise<any>;
  listReceivedByAccount(...args: any[]): Promise<any>;
  listReceivedByAddress(...args: any[]): Promise<any>;
  listSinceBlock(...args: any[]): Promise<any>;
  listTransactions(...args: any[]): Promise<any>;
  listUnspent(...args: any[]): Promise<any>;
  lockUnspent(...args: any[]): Promise<any>;
  move(...args: any[]): Promise<any>;
  ping(...args: any[]): Promise<any>;
  prioritiseTransaction(...args: any[]): Promise<any>;
  sendFrom(...args: any[]): Promise<any>;
  sendMany(...args: any[]): Promise<any>;
  sendRawTransaction(...args: any[]): Promise<any>;
  sendToAddress(...args: any[]): Promise<any>;
  setAccount(...args: any[]): Promise<any>;
  setGenerate(...args: any[]): Promise<any>;
  setTxFee(...args: any[]): Promise<any>;
  signMessage(...args: any[]): Promise<any>;
  signRawTransaction(...args: any[]): Promise<any>;
  stop(...args: any[]): Promise<any>;
  submitBlock(...args: any[]): Promise<any>;
  validateAddress(...args: any[]): Promise<any>;
  verifyChain(...args: any[]): Promise<any>;
  verifyMessage(...args: any[]): Promise<any>;
  verifyTxOutProof(...args: any[]): Promise<any>;
  walletLock(...args: any[]): Promise<any>;
  walletPassphrase(...args: any[]): Promise<any>;
  walletPassphraseChange(...args: any[]): Promise<any>;
}

