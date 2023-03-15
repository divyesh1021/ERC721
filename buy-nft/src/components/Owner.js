import {Button,Card,CardContent,Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers';
import { useState } from 'react';
import Web3 from 'web3';


const Owner = ({state}) => {

    const [bal,setBal] = useState('0');
    // const [disable,setdisable] = useState(true);

    let owner_account;
    let connected_account;
    // const [add,setAdd] = useState('0');


    // const Get_owner = async () => {

    // }


    const get_Balance = async (event) => {
        event.preventDefault();
        const { contract } = state;

        if(owner_account===connected_account){
            const balance = await contract.getBalance();
            const b = ethers.utils.formatEther(balance);
            setBal(b);
            return 
        }else{
            alert("You are not Owner")
        }
        
    }
    
    const j = async () => {
        const { contract } = state;
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.getAccounts();
        connected_account = accounts[0];
        const x = await contract.Owner().then((a) => {
            owner_account = a;
        });
    }
    j();
    window.ethereum.on("accountsChanged", () => {
        window.location.reload();
    });

    const Withdraw = async (event) => {
        event.preventDefault();
        const { contract } = state;
        // const web3 = new Web3(window.web3.currentProvider);
        // const accounts = await web3.eth.getAccounts();
        // const g = accounts[0];
        // const x = contract.Owner().then((a) => {
        //     h = a;
            // return h;
        // });
        // console.log('-----------------------------------------',g);
        // console.log('contract OWNER---=-=-=-=-=-===-',h);
        // const getpay = await contract.getPayment(contract.Owner());
        // console.log(getpay)
        console.log('inside withdrwakdnh',owner_account);
        console.log('inside withdrwakdnh',connected_account);
        if(owner_account===connected_account){
            const getpay = await contract.getPayment(contract.Owner());
            console.log(getpay)
        }
        else{
            alert('You Are Not Owner Of This Contract');
        }
    }


    return(
        <>
        <div className='div1'>
        <div>
                <Typography gutterBottom variant="h3" align="center">Contract Balance</Typography>
                <Card style={{maxWidth:"50%",margin:"0 auto",padding:"20px 5px"}}>
                    <CardContent>
                        <form onSubmit={get_Balance}>
                            <Grid container spacing={1}>
                                <Grid xs={20} sm={12} item>
                                    <Typography>Balance : {bal} Ether</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" size="large">Balance</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Typography gutterBottom variant="h3" align="center">Withdraw Balance</Typography>
                <Card style={{maxWidth:"50%",margin:"0 auto",padding:"20px 5px"}}>
                    <CardContent>
                        <form onSubmit={Withdraw}>
                            <Grid container spacing={1}>
                                <Grid xs={20} sm={12} item>
                                    {/* <TextField label="Address" placeholder="Enter Account Address" variant="outlined" fullWidth onChange={(e)=>{setAdd(e.target.value)}}></TextField> */}
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" size="large">Withdraw</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    )
}

export default Owner;