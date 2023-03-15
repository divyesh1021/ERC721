import './App.css';
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

function App() {

  const [state,setState] = useState({provider:null,signer:null,contract:null});

  useEffect(() => {
    const connectWallet = async () => {
      const contract_add = "0xad9aaF64EB31494Bd662f62EBeBf2061cFA86F11";
      const Abi = abi.abi;
      const { ethereum } = window;
      if(ethereum){
        const account = await ethereum.request({ method: 'eth_requestAccounts' });
      };
      const provider = new ethers.providers.Web3Provider(ethereum);
      console.log('provider===========================================================',provider)
      const Signer = provider.getSigner();
      const contract = new ethers.Contract(contract_add,Abi,Signer);
      setState({provider,Signer,contract});
    };
    connectWallet();
  },[]);

  return (
    <>
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/set-url" element={<Set state={state}/>}></Route>
          <Route path="/buy" element={<Buy state={state} />}></Route>
          <Route path="/mint" element={<Mint state={state} />}></Route>
          <Route path="" element={<Home state={state} />}></Route>
          <Route path="/owner" element={<Owner state={state}  />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
