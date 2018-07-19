/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var fs = require("fs");
var path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = fs.readFileSync(path.join(__dirname, ".secret")).toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/gnidan");
      },
      gas: 2000000,
      gasPrice: 20000000000,
      network_id: 4,
      confirmations: 2,     // # confirmations to wait between each deployment
      timeoutBlocks: 75   // # of blocks to wait for network to mine a deployment before erroring
    }
  }
};
