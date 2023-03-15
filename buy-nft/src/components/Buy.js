import { ImageList,ImageListItem,Typography } from "@mui/material";
// import {useLocation} from 'react-router-dom';
// import { useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mui/material';
import { useState } from "react";
import Web3 from 'web3';



const Buy = ({ state }) => {

    const [Images, setImages] = useState([]);
    const [disable,setdisable] = useState(false);
    // useEffect(()=>{
    
    // const img = metadata.image;

    const Connect_wallet = async () => {
        const { ethereum } = window;
        const { contract } = state;

        if (!ethereum.isConnected()) {
            const account = await ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(ethereum);
        } else {
            alert("already connected switch account click metamask");
        }
    }

    const token = [];
    let metadata;
    const imgURL = [];
    let connected_account;

    const img =async () => {

        setdisable(true);
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.getAccounts();
        connected_account = accounts[0];
        console.log('let connected_account',connected_account);
        const { contract } = state;

        const balance = await contract.balanceOf(connected_account);
        // const bal = Number(balance)+1;
        console.log(Number(balance));


        for (var i = 0; i < balance; i++) {
            const tokenId = await contract.tokenOfOwnerByIndex(connected_account, i);
            // console.log('TOKENID:-------->>>>>>',Number(tokenId));
            const ID = Number(tokenId);
            // console.log('IDIDIDIDIDIDIDId',ID)
            const tokenURI = await contract.tokenURI(tokenId);
            token.push({ ID, tokenURI });
        }
        console.log('arry:-------->>>>', token);

        for (var j = 0; j < token.length; j++) {
            const tokens = token[j];
            console.log('tokens---------------',tokens);
            console.log('token=-=-=-=-',tokens.tokenURI);
            const metadataresponse = await fetch(tokens.tokenURI);
            metadata = await metadataresponse.json();
            console.log("metadata=========", metadata);
            // token.metadata = metadata;
            setImages([...Images, metadata.image]);
            // imgURL.push([...imgURL, metadata.image]);
            Images.push(metadata.image);
        }
        
        console.log("imgURL=========>", imgURL);
        console.log("Images=========>", Images);
    }
    // img();

    // useEffect(() => {
    //     const token = [];
    //     let metadata;
    //     const imgURL = [];

    //     const img =async () => {

    //         const { contract } = state;

    //         const balance = await contract.balanceOf("0x49de5f840112aaa68512947bc749d3ff30fa40af");
    //         // const bal = Number(balance)+1;
    //         console.log(Number(balance));


    //         for (var i = 0; i < balance; i++) {
    //             const tokenId = await contract.tokenOfOwnerByIndex("0x49de5f840112aaa68512947bc749d3ff30fa40af", i);
    //             // console.log('TOKENID:-------->>>>>>',Number(tokenId));
    //             const ID = Number(tokenId);
    //             // console.log('IDIDIDIDIDIDIDId',ID)
    //             const tokenURI = await contract.tokenURI(tokenId);
    //             token.push({ ID, tokenURI });
    //         }
    //         console.log('arry:-------->>>>', token);

    //         for (var j = 0; j < token.length; j++) {
    //             const tokens = token[j];
    //             console.log('token=-=-=-=-',tokens.tokenURI);
    //             const metadataresponse = await fetch(tokens.tokenURI);
    //             metadata = await metadataresponse.json();
    //             console.log("metadata=========", metadata);
    //             // token.metadata = metadata;
    //             setImages([...Images, metadata.image]);
    //             // imgURL.push([...imgURL, metadata.image]);
    //             Images.push(metadata.image);
    //         }
            
    //         console.log("imgURL=========>", imgURL);
    //         console.log("Images=========>", Images);
    //     }
    //     img();

    // },[state]);
    return (
        <>
            <div className="div1">
                <Typography gutterBottom variant="h3" align="center" marginTop="20px">Show NFT</Typography>
                <Button type="submit" onClick={() => img()} variant="contained" color="primary" size="large" disabled={disable}> Show NFT </Button>
                <div className="div2">
                    <ImageList sx={{  height: 750 }} cols={3}>
                        {Images.map((data,index)=>(
                            <ImageListItem>
                                <img src={data} height="auto" alt="" key={index} />
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