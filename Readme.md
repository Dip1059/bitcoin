# bitcoin

bitcoin is a simple wrapper for the Bitcoin client's JSON-RPC API. It enables to use both free shared node apikey based rpc url and user:pass based node url. It is customized from <br>
```node-bitcoin:``` https://github.com/jb55/node-bitcoin.

The API is equivalent to the API document [here](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list).
The methods are exposed as lower camelcase methods on the `bitcoin.Client`
object, or you may call the API directly using the `cmd` method.

## Install

`npm install @dip1059/bitcoin`

or

`yarn add @dip1059/bitcoin`

## Examples

### Create client
```js
// all config options are optional.
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'username',
  pass: 'password',
  wallet: 'walletname',
  timeout: 30000
});
```


### Get balance across all accounts with minimum confirmations of 6

```js
async getBalance() {
  const balance= await client.getBalance('*', 6);
  console.log(balance);
}
getBalance();
```
### Getting the balance directly using `cmd`

```js
async getBalance() {
  const balance= await client.cmd('getbalance', '*', 6);
  console.log(balance);
}
getBalance();
```


## SSL
See [Enabling SSL on original client](https://en.bitcoin.it/wiki/Enabling_SSL_on_original_client_daemon).

If you're using this to connect to bitcoind across a network it is highly
recommended to enable `ssl`, otherwise an attacker may intercept your RPC credentials
resulting in theft of your bitcoins.

When enabling `ssl` by setting the configuration option to `true`, the `sslStrict`
option (verifies the server certificate) will also be enabled by default. It is
highly recommended to specify the `sslCa` as well, even if your bitcoind has
a certificate signed by an actual CA, to ensure you are connecting
to your own bitcoind.

```js
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'username',
  pass: 'password',
  ssl: true,
  sslStrict: true,
  sslCa: fs.readFileSync(__dirname + '/myca.cert')
});
```
