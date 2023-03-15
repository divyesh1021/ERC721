import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

// import { ethers } from 'ethers';

const Navbar = ()=>{
    const SwitchAccount = async () => {
        const { ethereum } = window;
        console.log("ghhjggggggggggg")
        if(ethereum){
            // const account = await ethereum.request({ method: "eth_requestAccounts" });

            const account = window.ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{
                    eth_accounts: {},
                },],
            });

        }

    
        
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar- bg-">
            <div className="container-fluid">
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mint">Mint</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/set-url">Set-URL</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/buy">Show-NFT</Link>
                    </li>
                    
                </ul>
                <div >
                    <Button variant='contained' onClick={() => SwitchAccount()}>Switch Account</Button>
                </div>
            </div>
        </div>
    </nav> 
    </>
    );
};

export default Navbar;