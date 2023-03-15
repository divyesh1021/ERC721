/** @type import('hardhat/config').HardhatUserConfig */
// require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require("./scripts/deploy");
require("./scripts/mint");
const { BigNumber } = require("ethers");
const path = require("path");

const { API_KEY,PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "Goerli",
  paths:{
  // contracts_build_directory: path.join(__dirname, "buy-nft/src/contracts"),
  artifacts:"buy-nft/src/contracts"
  },
  networks: {
   hardhat: {},
   Goerli: {
     url: API_KEY,
     accounts: [`0x${PRIVATE_KEY}`],
    //  gas: 'auto' 
    },
   ethereum: {
     chainId: 1,
     url: API_KEY,
     accounts: [`0x${PRIVATE_KEY}`]
   },
 },
}