const Web3 = require('web3');

const web3 = new Web3('https://rinkeby.infura.io/v3/72d7ffb3990747adae8cf3bfd9c41946');

const TokenABI = require('../constants/abi/ERC20.json');

const TokenAAddress = '0x55d398326f99059fF775485246999027B3197955';

const Token = new web3.eth.Contract(
    TokenABI.abi,
    TokenAAddress,
);

const addressFrom = '0x99B334043eAdA6F62348e5fBb8c7D8866854485F';
const addressTo = '0x7d838936ffc8d58685458173e4a978278c785667';
const amount = '10' + '0'.repeat(18);

async function generateBytes() {
    const tx = Token.methods.transferFrom(addressFrom, addressTo, amount);
    const data = tx.encodeABI();
    console.log(data)
}

generateBytes();
