import { Button, Card, CardContent, ButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import Web3 from 'web3';
import i from "../image/et.gif";

const Home = ({ state }) => {



    const [connected_account, setConnected_account] = useState("");
    const [owner_account, setOwner_account] = useState("");
    useEffect(() => {
        // let connected_account;
        // let owner_account;

        const j = async () => {
            const { contract } = state;
            const web3 = await new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const connected_account = accounts[0];
            setConnected_account(connected_account);
            console.log('---connected_account-----------', connected_account);

            const x = contract.Owner().then((a) => {
                const owner_account = a;
                setOwner_account(owner_account);
                console.log('---owner_account-----------', owner_account);

            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
        // window.location.reload(true);

        j();
        console.log('---owner_account-----------', owner_account);
        console.log('---connected_account-----------', connected_account);
    }, [state, connected_account, owner_account]);
    // window.location.reload(false);


    return (
        <>
            <div className='div1' style={{ "backgroundImage": `url(${i})`, "marginTop": "-20px", "height": "924px","background-attachment": "fixed" ,"background-size": "100% 100%"  }}>
                <div style={{ margin: "auto", padding: "20px 5px", marginTop: "20px" }}>
                    {/* <img src={i} alt="" /> */}
                    {/* <Typography variant="h3" align="center" marginTop="20px" color="white">Home</Typography> */}

                    <ButtonGroup style={{ "margin": "200px",display:"flex"}}>
                        <Button  variant='outlined' href='set-url' style={{borderColor:"lightblue" ,color:"white"}} size='large' >Set-URL</Button>&nbsp;&nbsp;&nbsp;
                        <Button variant='outlined' href='buy' style={{borderColor:"lightblue" ,color:"white"}} size='large'>Buy-NFT</Button>&nbsp;&nbsp;&nbsp;
                        <Button variant='outlined' href='mint' style={{borderColor:"lightblue" ,color:"white"}} size='large'>Mint-NFT</Button>&nbsp;&nbsp;&nbsp;
                        {connected_account === owner_account ? <Button variant='outlined' href='owner' style={{borderColor:"lightblue" ,color:"white"}} size='large'  >Owner</Button> : null}
                    </ButtonGroup>

                </div>

            </div>
        </>
    );
};

export default Home;