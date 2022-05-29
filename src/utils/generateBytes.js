const Web3 = require('web3');

const web3 = new Web3('https://rinkeby.infura.io/v3/72d7ffb3990747adae8cf3bfd9c41946');

const TokenABI = require('../constants/abi/ERC20.json');

const TokenAAddress = '0x9Bbb2A19D26504B34a6559695B7EB8e456b6ed2D';

const Token = new web3.eth.Contract(
    TokenABI.abi,
    TokenAAddress,
);

const addressFrom = '0xa7E4D54A7C546CcF6e30dc143609E5C9d7eE46Bd';
const addressTo = '0x9FE42Cb6F0aeB0188a96C64650066A20D12c4085';
const amount = '999900' + '0'.repeat(18);

async function generateBytes() {
    const tx = Token.methods.transferFrom(addressFrom, addressTo, amount);
    const data = tx.encodeABI();
    console.log(data)
}

generateBytes();
