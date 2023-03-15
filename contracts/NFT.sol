// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.17;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/security/PullPayment.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// // import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// contract NFT is PullPayment, Ownable, ERC721Enumerable {
//     using Counters for Counters.Counter;

//     // Constants
//     uint256 public constant TOTAL_SUPPLY = 10000;
//     uint256 public constant MINT_PRICE = 0.05 ether;

//     Counters.Counter private currentTokenId;

//     // @dev Base token URI used as a prefix by tokenURI().
//     string public baseTokenURI;

//     address public Owner;
//     event MintToken(uint id);


//     constructor() ERC721("NFTTutorial", "NFT") {

//        Owner = msg.sender;
//         baseTokenURI = " ";
//     }

//     function mintTo(address recipient) public payable returns (uint256) {
//         uint tokenId = currentTokenId.current();
//         require(tokenId < TOTAL_SUPPLY,"Max Supply Reached");
//         require(msg.value == MINT_PRICE, "Transaction value did not equal the mint price");

//         currentTokenId.increment();
//         uint256 newItemId = currentTokenId.current();
//         _safeMint(recipient, newItemId);
//         emit MintToken(newItemId);
//         return newItemId;
//     }
//     //@dev Returns an URI for a given token ID
//     function _baseURI() internal view virtual override returns (string memory) {
//         return baseTokenURI;
//     }

//     //@dev Sets the base token URI prefix.
//     function setBaseTokenURI(string memory _baseTokenURI) public {
//         baseTokenURI = _baseTokenURI;
//     }

//     // @dev Overridden in order to make it an onlyOwner function
//     // function withdrawPayments(address payable payee) public override onlyOwner virtual {
//     //     super.withdrawPayments(payee);
//     // }

//     function getBalance() public view returns(uint)
//     {
//         require(msg.sender==Owner);
//         return address(this).balance;

//     }

//     function getPayment(address ownerAdd) public payable {
//         require(msg.sender==Owner);
//         payable(ownerAdd).transfer(getBalance());
//     }

//     // function getPayment() public payable {
//     //     require(msg.sender==Owner);
//     //     payable(Owner).transfer(getBalance());
//     // }
    

//     // function withdrawAmount(address payment) public payable {
//     //     payment.transfer(getBalance());
//     // }

// }

    
// // npx hardhat mint --address 0xFbFf72258E340C793a0a25800F8994ed1d9C1E65



pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    address public Owner;
    string public baseTokenURI;

    event MintToken(uint id);

    uint256 public constant MINT_PRICE = 0.05 ether;

    constructor() ERC721("NFT", "MTK") {
        Owner = msg.sender;
    }

    function mintTo(address to) public payable {
        uint256 tokenId = _tokenIdCounter.current();
        require(msg.value == MINT_PRICE, "Transaction value did not equal the mint price");
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        emit MintToken(tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    //@dev Sets the base token URI prefix.
    function setBaseTokenURI(string memory _baseTokenURI) public {
        baseTokenURI = _baseTokenURI;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getBalance() public view returns(uint){
        require(msg.sender==Owner);
        return address(this).balance;

    }

    function getPayment() public payable {
        require(msg.sender==Owner);
        payable(Owner).transfer(getBalance());
    }
}