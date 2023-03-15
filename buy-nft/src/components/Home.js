import {Button,Card,CardContent,ButtonGroup} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from "react";
import Web3 from 'web3';

const Home = ({state}) => {

    

    const [connected_account,setConnected_account] = useState("");
    const [owner_account,setOwner_account] = useState("");    
    useEffect(() => {
        // let connected_account;
        // let owner_account;

        const j = async () => {
            const { contract } = state;
            const web3 = await new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const connected_account = accounts[0];
            setConnected_account(connected_account);
            console.log('---connected_account-----------',connected_account);

            const x =  contract.Owner().then((a) => {
                const owner_account = a;
                setOwner_account(owner_account);
                console.log('---owner_account-----------',owner_account);

            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
            // window.location.reload(true);

        j();
        console.log('---owner_account-----------',owner_account);
        console.log('---connected_account-----------',connected_account);
    }, [state,connected_account,owner_account]);
    // window.location.reload(false);
        

    return (
        <>
        <div className='div1'>
            <div>
                <Typography gutterBottom variant="h3" align="center" marginTop="20px">Home</Typography>
                <Card style={{ maxWidth: "50%", margin: "auto", padding: "20px 5px",marginTop:"50px" }}>
                    <CardContent style={{justifyContent:"space-between"}}>
                        <ButtonGroup  style={{marginright: "100px"}}>
                            <Button variant='contained' href='set-url' >Set-URL</Button>&nbsp;&nbsp;&nbsp;
                            <Button variant='contained' href='buy' >Buy-NFT</Button>&nbsp;&nbsp;&nbsp;
                            <Button variant='contained' href='mint' >Mint-NFT</Button>&nbsp;&nbsp;&nbsp;
                           { connected_account === owner_account ? <Button variant='contained' href='owner'  >Owner</Button> : null}
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </div>
            
        </div>
        </>
    );
};

export default Home;