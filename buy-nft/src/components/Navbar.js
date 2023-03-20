import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ConnectButton } from "@rainbow-me/rainbowkit";



// import { useConnectWallet } from '@web3-onboard/react'

// import { ConnectButton } from '@rainbow-me/rainbowkit';

// import React from 'react'
// import { Web3OnboardProvider, init } from '@web3-onboard/react'
// import { useConnectWallet } from '@web3-onboard/react'
// import injectedModule from '@web3-onboard/injected-wallets'
// import { ethers } from 'ethers'
// import injectedModule from '@web3-onboard/injected-wallets'
// import infinityWalletModule from '@web3-onboard/infinity-wallet'
// import fortmaticModule from '@web3-onboard/fortmatic'
// import gnosisModule from '@web3-onboard/gnosis'
// import keepkeyModule from '@web3-onboard/keepkey'
// import keystoneModule from '@web3-onboard/keystone'
// import ledgerModule from '@web3-onboard/ledger'
// import portisModule from '@web3-onboard/portis'
// import torusModule from '@web3-onboard/torus'
// import trezorModule from '@web3-onboard/trezor'
// import walletConnectModule from '@web3-onboard/walletconnect'
// import coinbaseModule from '@web3-onboard/coinbase'
// import magicModule from '@web3-onboard/magic'
// import web3authModule from '@web3-onboard/web3auth'
// import dcentModule from '@web3-onboard/dcent'
// import sequenceModule from '@web3-onboard/sequence'
// import tahoModule from '@web3-onboard/taho'
// import trustModule from '@web3-onboard/trust'
// import frontierModule from '@web3-onboard/frontier'

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
// const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

// const injected = injectedModule()
// const infinityWallet = infinityWalletModule()
// const fortmatic = fortmaticModule({
//     apiKey: 'apiKey'
// })


// const infuraKey = 'a000e9d4c4a84f2da055fd797eab742f'
// const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// // initialize Onboard
// const wallets = [injected, infinityWallet, fortmatic]
// const chains = [
//     {
//         id: '0x1',
//         token: 'ETH',
//         label: 'Ethereum Mainnet',
//         rpcUrl: 'https://mainnet.infura.io/v3/a000e9d4c4a84f2da055fd797eab742f'
//     },
//     {
//         id: '0x5',
//         token: 'GoerliETH',
//         label: 'Goerli test network',
//         rpcUrl: 'https://goerli.infura.io/v3/a000e9d4c4a84f2da055fd797eab742f'
//     },
//     {
//         id: '0x13881',
//         token: 'MATIC',
//         label: 'Polygon - Mumbai',
//         rpcUrl: 'https://rpc-mumbai.maticvigil.com/'
//     },
//     {
//         id: '0x38',
//         token: 'BNB',
//         label: 'Binance',
//         rpcUrl: 'https://bsc-dataseed.binance.org/'
//     },
//     {
//         id: '0xA',
//         token: 'OETH',
//         label: 'Optimism',
//         rpcUrl: 'https://mainnet.optimism.io'
//     },
//     {
//         id: '0xA4B1',
//         token: 'ARB-ETH',
//         label: 'Arbitrum',
//         rpcUrl: 'https://rpc.ankr.com/arbitrum'
//     }
// ]

// const appMetadata = {
//     name: 'Connect Wallet Example',
//     icon: '<svg>My App Icon</svg>',
//     description: 'Example showcasing how to connect a wallet.',
//     recommendedInjectedWallets: [
//         { name: 'MetaMask', url: 'https://metamask.io' },
//         { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
//     ]
// }

// const web3Onboard = init({
//     wallets,
//     chains,
//     appMetadata
// })


// import { ethers } from 'ethers';



const Navbar = () => {



    // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // // create an ethers provider
    // let ethersProvider

    // if (wallet) {
    //     // if using ethers v6 this is:
    //     // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    //     ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    // }


    const SwitchAccount = async () => {
        const { ethereum } = window;
        console.log("ghhjggggggggggg")
        if (ethereum) {
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
                <div className="container-fluid" >

                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ "color": "white", "fontSize": "20px", "paddingInline": "15px" }}>Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to="/mint" style={{ "color": "white", "fontSize": "20px", "paddingInline": "15px" }} >Mint</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/set-url" style={{ "color": "white", "fontSize": "20px", "paddingInline": "15px" }}>Set-URL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/buy" style={{ "color": "white", "fontSize": "20px", "paddingInline": "15px" }}>Show-NFT</Link>
                            </li>

                        </ul>
                        <div >
                            {/* <Button size='large' variant='outlined' style={{"color":"white","borderColor":"lightblue"}} disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
                                {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
                            </Button> */}
                            {/* <Web3OnboardProvider web3Onboard={web3Onboard}>
                                <useConnectWallet />
                            </Web3OnboardProvider> */}
                            {/* <Button variant='contained' onClick={() => SwitchAccount()}>Switch Account</Button> */}
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;