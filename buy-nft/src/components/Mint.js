import { Button, Typography, Card, CardContent, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { ethers } from "ethers";
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';


const Mint = ({ state }) => {
    const [add, setAdd] = useState('');
    // const [hash, setHash] = useState('');

    // const addRecentTransaction = useAddRecentTransaction();



    const Mint_NFT = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const amount = { value: ethers.utils.parseEther('0.05') };
        const mint = await contract.mintTo(add, amount);
        const s1 = await mint.wait();
        const order_id = s1.events[0].args.tokenId;
        console.log('--=-=-=-=-=-=-', order_id);
        // const s = mint.value;
        // const m = Number('----------value=====',s);
        // console.log(m)
        // const tr = mint.hash;
        // setHash(tr);
        // const lo = ethers
        // console.log('=+++++++++++++++++',lo);
        console.log('----------a,', s1);
        console.log(`Transaction Hash: ${mint.hash}`);
    }

    return (
        <>
            <div className="div1">
                <Typography variant="h3" align="center">Mint NFT</Typography>
                <div>
                    <Card style={{ maxWidth: "50%", margin: "0 auto", padding: "20px 5px" }}>
                        <CardContent>
                            <form onSubmit={Mint_NFT}>
                                <Grid container spacing={1}>
                                    <Grid xs={20} sm={12} item>
                                        <TextField label="Address" placeholder="Enter Account Address" variant="outlined" fullWidth onChange={(e) => { setAdd(e.target.value) }}></TextField>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type="submit" variant="contained" color="primary" size="large">MINT-NFT</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                
                    {/* <RainbowKitProvider showRecentTransactions={hash}>
                        <Button onClick={() => { addRecentTransaction({ hash: '0x...', description: '...' }) }}>Show</Button>
                    </RainbowKitProvider> */}
                </div>
            </div>
        </>
    );
};

export default Mint;