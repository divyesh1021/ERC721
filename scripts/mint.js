// const { task } = require("hardhat/config");
// const { getContract } = require("./helpers");

// task("mint", "Mints from the NFT contract")
// .addParam("address", "The address to receive a token")
// .setAction(async function (taskArguments, hre) {
//     const contract = await getContract("NFT", hre);
//     const transactionResponse = await contract.mintTo(taskArguments.address, {
//         gasLimit: 500_000,
//     });
//     console.log(`Transaction Hash: ${transactionResponse.hash}`);
// });

// const hre = require("hardhat");



const { task } = require("hardhat/config");
const { getContract } = require("./helpers");
const fetch = require("node-fetch");
const { BigNumber } = require("ethers");
// const { ethers } = require("hardhat");

task("mint", "Mints from the NFT contract")
.addParam("address", "The address to receive a token")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("NFT", hre);
    const value = ethers.utils.parseEther("0.05");
    const transactionResponse = await contract.mintTo(taskArguments.address, {
        gasLimit: BigNumber.from('500000'),value,
    });
    console.log(`Transaction Hash: ${transactionResponse.hash}`);
    console.log('============---------',taskArguments.address);
});


task("set-base-token-uri", "Sets the base token URI for the deployed smart contract")
.addParam("baseUrl", "The base of the tokenURI endpoint to set")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("NFT", hre);
    const transactionResponse = await contract.setBaseTokenURI(taskArguments.baseUrl, {
        gasLimit: BigNumber.from('500000'),
    });
    console.log(`Transaction Hash: ${transactionResponse.hash}`);
});


task("token-uri", "Fetches the token metadata for the given token ID")
.addParam("tokenId", "The tokenID to fetch metadata for")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("NFT", hre);
    const response = await contract.tokenURI(taskArguments.tokenId, {
        gasLimit: BigNumber.from('50000'),
        
    });
    
    const metadata_url = response;
    console.log(`Metadata URL: ${metadata_url}`);

    const metadata = await fetch(metadata_url).then(res => res.json());
    console.log(`Metadata fetch response: ${JSON.stringify(metadata, null, 2)}`);
});


task("getPayment", "withdraw from the NFT contract")
.addParam("ownerAdd", "The address to contract owner")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("NFT", hre);
    const Withdraw = await contract.getPayment(taskArguments.ownerAdd,
        {gasLimit: BigNumber.from('50000'),
    });
    console.log(`Transaction Hash: ${Withdraw.hash}`);
});