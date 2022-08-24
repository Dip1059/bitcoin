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
  addMultiSigAddress(...args: any[]): any;
  addNode(...args: any[]): any;
  backupWallet(...args: any[]): any;
  createMultiSig(...args: any[]): any;
  createRawTransaction(...args: any[]): any;
  decodeRawTransaction(...args: any[]): any;
  decodeScript(...args: any[]): any;
  dumpPrivKey(...args: any[]): any;
  dumpWallet(...args: any[]): any;
  encryptWallet(...args: any[]): any;
  estimateFee(...args: any[]): any;
  estimatePriority(...args: any[]): any;
  generate(...args: any[]): any;
  getAccount(...args: any[]): any;
  getAccountAddress(...args: any[]): any;
  getAddedNodeInfo(...args: any[]): any;
  getAddressesByAccount(...args: any[]): any;
  getBalance(...args: any[]): any;
  getBestBlockHash(...args: any[]): any;
  getBlock(...args: any[]): any;
  getBlockchainInfo(...args: any[]): any;
  getBlockCount(...args: any[]): any;
  getBlockHash(...args: any[]): any;
  getBlockTemplate(...args: any[]): any;
  getChainTips(...args: any[]): any;
  getConnectionCount(...args: any[]): any;
  getDifficulty(...args: any[]): any;
  getGenerate(...args: any[]): any;
  getInfo(...args: any[]): any;
  getMempoolInfo(...args: any[]): any;
  getMiningInfo(...args: any[]): any;
  getNetTotals(...args: any[]): any;
  getNetworkInfo(...args: any[]): any;
  getNetworkHashPs(...args: any[]): any;
  getNewAddress(...args: any[]): any;
  getPeerInfo(...args: any[]): any;
  getRawChangeAddress(...args: any[]): any;
  getRawMemPool(...args: any[]): any;
  getRawTransaction(...args: any[]): any;
  getReceivedByAccount(...args: any[]): any;
  getReceivedByAddress(...args: any[]): any;
  getTransaction(...args: any[]): any;
  getTxOut(...args: any[]): any;
  getTxOutProof(...args: any[]): any;
  getTxOutSetInfo(...args: any[]): any;
  getUnconfirmedBalance(...args: any[]): any;
  getWalletInfo(...args: any[]): any;
  help(...args: any[]): any;
  importAddress(...args: any[]): any;
  importPrivKey(...args: any[]): any;
  importWallet(...args: any[]): any;
  keypoolRefill(...args: any[]): any;
  keyPoolRefill(...args: any[]): any;
  listAccounts(...args: any[]): any;
  listAddressGroupings(...args: any[]): any;
  listLockUnspent(...args: any[]): any;
  listReceivedByAccount(...args: any[]): any;
  listReceivedByAddress(...args: any[]): any;
  listSinceBlock(...args: any[]): any;
  listTransactions(...args: any[]): any;
  listUnspent(...args: any[]): any;
  lockUnspent(...args: any[]): any;
  move(...args: any[]): any;
  ping(...args: any[]): any;
  prioritiseTransaction(...args: any[]): any;
  sendFrom(...args: any[]): any;
  sendMany(...args: any[]): any;
  sendRawTransaction(...args: any[]): any;
  sendToAddress(...args: any[]): any;
  setAccount(...args: any[]): any;
  setGenerate(...args: any[]): any;
  setTxFee(...args: any[]): any;
  signMessage(...args: any[]): any;
  signRawTransaction(...args: any[]): any;
  stop(...args: any[]): any;
  submitBlock(...args: any[]): any;
  validateAddress(...args: any[]): any;
  verifyChain(...args: any[]): any;
  verifyMessage(...args: any[]): any;
  verifyTxOutProof(...args: any[]): any;
  walletLock(...args: any[]): any;
  walletPassphrase(...args: any[]): any;
  walletPassphraseChange(...args: any[]): any;
}
