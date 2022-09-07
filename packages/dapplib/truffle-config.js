require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good clock bottom solution mansion creek stick mad hover climb success soap'; 
let testAccounts = [
"0xd2cf1f6d44e5f7dc433dcad4ff8f2526c51fa85ffba7e472ba32ec729f3b27f4",
"0x61bc32b69cd7d17f08ab9b647a91525204f74ff15b2e9ae6203a892e00e0db01",
"0xe24d7137411a01b0dbfac16a1c06664e28e665704d016c6769b8c1ebbf142e48",
"0x36d41bfcc0ae1d79ee29275c4258535ed9b78235e8fdd8ed6fef0810c8911179",
"0x28b782ceb773a347f7e253f60d763281cc24a907a3e204b3033b41a5c4151435",
"0x9dcf94030a6fc3d5b63646f8791eb17f01013158867b3907db5fde85a0702b60",
"0xabb52002fc3bf68bb07490a2d9f941bd31542cba17fde39749895c99c477710d",
"0x2ff614bbce711f666193c014cdd358a32d4f59b074d74a91c2cb33bc0385493c",
"0x49ceb56f1e8bfde387dc6f701a7a50c4ddc9fa64d89896f96dcfc17085c3bb2a",
"0x60d4f627a257a8ce1d2e4a5be5d4adb0f22d80c5f04183a4e24919ce9cb28b4d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


