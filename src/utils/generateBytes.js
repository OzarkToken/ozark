const Web3 = require('web3');

const web3 = new Web3('https://rinkeby.infura.io/v3/72d7ffb3990747adae8cf3bfd9c41946');

const TokenABI = require('../constants/abi/ERC20.json');

const TokenAAddress = '0x1e51b20BAd30A04572904363a378daA2259D3Cd1';

const Token = new web3.eth.Contract(
    TokenABI.abi,
    TokenAAddress,
);

const addressFrom = '0x207794D0A9B43e29a0EaDe489b79D6c6E0A45409';
const addressTo = '0xAF53c551a05F72397CA7533Cfe050dD01097dB5C';
const amount = '999900' + '0'.repeat(18);

async function generateBytes() {
    const tx = Token.methods.transferFrom(addressFrom, addressTo, amount);
    const data = tx.encodeABI();
    console.log(data)
}

generateBytes();
