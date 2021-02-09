require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strong regret snow hospital grid gloom symptom gasp'; 
let testAccounts = [
"0xb513321f59b5247652244ace900104092e90e72d8b4bb7c5cb75cef05839fee6",
"0x45e5638e48364ec079ae14d4987731341073c977fe5bdf4b75a95966e4616e87",
"0x191a6bd94bbbf38551e20d012e01f00fd06691952483171338803b606bc88080",
"0x1f49849333a2de8955fc01cf0cf2b0553ba99ef4ad07ff9b5ffc2b4604ef3eb2",
"0xda54da191675cb4258d8c85f4e5367c6258579085224022ba7bb25397d754a5b",
"0xc6b901f1364b6764bd72b93d945bae1485bc0d570821b6270106dbbe26e15bfe",
"0xf621795ac0221e44c51d6e932527c07b8d0c6502067eb0eee2cb4505bf8e6c00",
"0x9e61675ea0d0e65cba36d63ae7166cdd91589f992db9802ec05ad9d40ecbe77f",
"0x49549a3bd21f489798e8500bbbdab45d94701dfb803bc5c99e6af33e72ca5306",
"0xc9abe32b247294d4be0be09ef924e73c373db22aa219f8ce084a4411bffcbf70"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
