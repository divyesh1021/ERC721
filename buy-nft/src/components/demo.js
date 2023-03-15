import { ImageList,ImageListItem } from "@mui/material";
// import {useLocation} from 'react-router-dom';
// import { useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mui/material';
import { useState } from "react";
// import Web3 from 'web3';


const Buy = ({ state }) => {

    const [Images, setImages] = useState([]);
    // useEffect(()=>{
    const token = [];
    let metadata;
    const imgURL = [];
    // const img = metadata.image;

    const Connect_wallet = async () => {
        const { ethereum } = window;
        const { contract } = state;

        const balance = await contract.balanceOf("0x49de5f840112aaa68512947bc749d3ff30fa40af");
        // const bal = Number(balance)+1;
        console.log(Number(balance));




        if (!ethereum.isConnected()) {
            const account = await ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(ethereum);
        } else {
            for (var i = 0; i < balance; i++) {
                const tokenId = await contract.tokenOfOwnerByIndex("0x49de5f840112aaa68512947bc749d3ff30fa40af", i);
                // console.log('TOKENID:-------->>>>>>',Number(tokenId));
                const ID = Number(tokenId);
                // console.log('IDIDIDIDIDIDIDId',ID)
                const tokenURI = await contract.tokenURI(tokenId);
                token.push({ ID, tokenURI });
            }
            console.log('arry:-------->>>>', token);
            alert("already connected switch account click metamask");

            for (var j = 0; j < token.length; j++) {
                const tokens = token[j];
                console.log('token=-=-=-=-',tokens.tokenURI);
                const metadataresponse = await fetch(tokens.tokenURI);
                metadata = await metadataresponse.json();
                console.log("metadata=========", metadata);
                // token.metadata = metadata;
                setImages([...Images, metadata.image]);
                // imgURL.push([...imgURL, metadata.image]);
                Images.push(metadata.image);
            }
        }
    }
    // useEffect(() => {
    //     console.log("imgURL=========>", imgURL);
    //     console.log("Images=========>", Images);

    // }, [Images]);

    return (
        <>
            <div className="div1">
                <h1 className="h1">BUY NFT</h1>
                <Button type="submit" onClick={() => Connect_wallet()} variant="contained" color="primary" size="large">Connect wallet</Button>
                <div className="div2">
                    <ImageList sx={{ width: 1700, height: 1000 }} cols={3}>
                        {Images.map((data,index)=>(
                            <ImageListItem>
                                <img src={data} alt="" key={index} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </>
    );
};

export default Buy;


// {
//     Images.map((data, index) => {
//         console.log("data========>", data);
//         return (
//             <ImageList cols={4}>
//                 <img src={data} alt='' key={index} width="200px" height="200px"/>
//             </ImageList>
            
//         )
//     })
// }