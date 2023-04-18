import './App.css';
import "@rainbow-me/rainbowkit/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Buy from "./components/Buy";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import abi from "./contracts/contracts/NFT.sol/NFT.json";
import Set from './components/Set';
import Mint from './components/Mint';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Owner from './components/Owner';
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Web3 from 'web3';
// import { na } from "./YourComponent";


const { chains, provider } = configureChains(
  [chain.goerli,chain.polygonMumbai,chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});



// import i from './image/e.gif';
function App({hash}) {

  const [state, setState] = useState({ provider: null, signer: null, contract: null });

  useEffect(() => {
    const connectWallet = async () => {
      const contract_add = "0xad9aaF64EB31494Bd662f62EBeBf2061cFA86F11";
      const Abi = abi.abi;
      const { ethereum } = window;
      if (ethereum) {
        const account = await ethereum.request({ method: 'eth_requestAccounts' });
      };
      const web3 = new Web3(window.web3.currentProvider);
      const account = await web3.eth.getAccounts();
      const connected_account = account[0];
      console.log("999999999999999999999999999999fffff 9999999999",connected_account)
      
      const provider = new ethers.providers.Web3Provider(ethereum);
      console.log('provider===========================================================', provider)
      const Signer = provider.getSigner();
      const contract = new ethers.Contract(contract_add, Abi, Signer);
      setState({ provider, Signer, contract });
    };
    connectWallet();
  }, []);
  // const web3 = new Web3(window.web3.currentProvider);
  // const account = await web3.eth.getAccounts();
  // const connected_account = account[0];
  return (
    <>
      <div>
        <BrowserRouter>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} coolMode showRecentTransactions={true}>
              <Navbar />
            </RainbowKitProvider>
          </WagmiConfig>
          <Routes>
            <Route path="/set-url" element={<Set state={state} />}></Route>
            <Route path="/buy" element={<Buy state={state} />}></Route>
            <Route path="/mint" element={<Mint state={state} />}></Route>
            <Route path="" element={<Home state={state} />}></Route>
            <Route path="/owner" element={<Owner state={state} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
