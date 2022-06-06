const Web3 = require('web3');

const web3 = new Web3('https://rinkeby.infura.io/v3/72d7ffb3990747adae8cf3bfd9c41946');

const TokenABI = require('../constants/abi/ERC20.json');

const TokenAAddress = '0xBE34615F4599E38cb323c6e2C192135FA469f988';

const Token = new web3.eth.Contract(
    TokenABI.abi,
    TokenAAddress,
);

const addressFrom = '0x207794D0A9B43e29a0EaDe489b79D6c6E0A45409';
const addressTo = '0xb061C4E5A5432fA1cBce0e9f6d6da932c88CdCE6';
const amount = '1400000' + '0'.repeat(18);

async function generateBytes() {
    const tx = Token.methods.transferFrom(addressFrom, addressTo, amount);
    const data = tx.encodeABI();
    console.log(data)
}

generateBytes();
