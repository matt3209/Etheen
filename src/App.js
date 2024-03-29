import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import logo from '../src/woe_logo.png';
import loadingImage from '../src/images/rotating-image.png';
import { Button } from '@material-ui/core';
import Wizard from './models/Wizard';
import './App.css';


function App() {
  const [nftIds, setNftIds] = useState([]);
  const [selectedNftId1, setSelectedNftId1] = useState("");
  const [selectedNftId2, setSelectedNftId2] = useState("");
  const [selectedNftId3, setSelectedNftId3] = useState("");
  const [selectedNftId4, setSelectedNftId4] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [isLoading, setIsLoading] = useState(false);



  const connectWallet = async () => {
    try {
      await window.ethereum.enable();
      setIsConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadNfts = async () => {
      if (isConnected) {
        setIsLoading(true);
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Replace this with your NFT contract address
        const contractAddress = '0x5139cfEE9E8533d9f52be27BE183ec60c7222274';
        // Replace this with the ABI of your NFT contract
        const contractABI = [{"inputs":[{"internalType":"string","name":"_customBaseURI","type":"string"},{"internalType":"address[]","name":"_payees","type":"address[]"},{"internalType":"uint256[]","name":"_shares","type":"uint256[]"},{"internalType":"address","name":"dev","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"CallerIsContract","type":"error"},{"inputs":[],"name":"CantMintZero","type":"error"},{"inputs":[],"name":"ExceedsMaxSupply","type":"error"},{"inputs":[],"name":"ExceedsPresaleSupply","type":"error"},{"inputs":[],"name":"ExceedsReserveSupply","type":"error"},{"inputs":[],"name":"InsufficientPayment","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"MintingTooManyPerTxn","type":"error"},{"inputs":[],"name":"NotOwnerOrDev","type":"error"},{"inputs":[],"name":"OwnerIndexOutOfBounds","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"PresaleNotActive","type":"error"},{"inputs":[],"name":"PublicSaleNotActive","type":"error"},{"inputs":[],"name":"TokenIndexOutOfBounds","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"WhitelistNotEnabled","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"checkWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipWhitelistSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintCountPerTxn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWhitelistSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"mintReserveToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mintWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSize","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setMaxWhitelistSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPresalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newReserve","type":"uint256"}],"name":"setReserveSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSigningKey","type":"address"}],"name":"setWhitelistSigningAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReserveSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWhitelistMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistSaleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const balance = await contract.methods.balanceOf(account).call();
        const tokenIds = [];
        //let newWizard;

        for (let i = 0; i < balance; i++) {
          const tokenId = await contract.methods.tokenOfOwnerByIndex(account, i).call();
          const tokenJson = await contract.methods.tokenURI(tokenId).call();
          const response = await fetch(tokenJson);
          const data = await response.json();
          const imageUrl = data?.image;
          const newWizard = new Wizard(tokenId,imageUrl) //not initalized warning, check into this
          tokenIds.push(newWizard);
        }

        setNumberOfTokens(tokenIds.length);
        setNftIds(tokenIds);
        await new Promise(resolve => setTimeout(resolve, 5000));
        setIsLoading(false);
      }
    };
    loadNfts();
  }, [isConnected]);


  return (
      <div>
        <div>
          <img src={logo} alt="My Image" />
        </div>
        {isLoading && (
            <img
                className="loading-image"
                src={loadingImage}
                alt="Loading..."
            />
        )}
        {!isConnected && (
            <Button variant="contained" color="info" onClick={connectWallet}>
              Connect Wallet
            </Button>
        )}
        {numberOfTokens < 4 && isConnected && !isLoading && (
            <div>
              <h4>Not Enough Wizards to Complete the Circle</h4>
            </div>
        )}
        {numberOfTokens > 3 && isConnected && !isLoading && (
            <div>
              <h1>Burnable Wizards</h1>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-wrapper">
                  <div><select
                      className="form-select"
                      value={selectedNftId1}
                      onChange={(e) => {
                        setSelectedNftId1(e.target.value);
                      }}>
                    <option value="">Wizard</option>
                    {nftIds.filter((newWizard) => ![selectedNftId2, selectedNftId3, selectedNftId4].includes(newWizard.id))
                        .map((newWizard) => (
                            <option value={newWizard.id} key={newWizard.id}>
                              {newWizard.id}
                            </option>
                    ))}
                  </select>
                </div>
                  {selectedNftId1 && (
                      <img src={nftIds.find(newWizard => newWizard.id === selectedNftId1).imageUrl}/>
                  )}
                </div>
                <div className="dropdown-wrapper">
                  <div><select
                      className="form-select"
                      value={selectedNftId2}
                      onChange={(e) => setSelectedNftId2(e.target.value)}>
                    <option value="">Wizard</option>
                    {nftIds.filter((newWizard) => ![selectedNftId1, selectedNftId3, selectedNftId4].includes(newWizard.id))
                        .map((newWizard) => (
                            <option value={newWizard.id} key={newWizard.id}>
                              {newWizard.id}
                            </option>
                    ))}
                  </select>
                  </div>
                  {selectedNftId2 && (
                      <img src={nftIds.find(newWizard => newWizard.id === selectedNftId2).imageUrl}/>
                  )}
                </div>
                <div className="dropdown-wrapper">
                  <div>
                  <select
                      className="form-select"
                      value={selectedNftId3}
                      onChange={(e) => setSelectedNftId3(e.target.value)}>
                    <option value="">Wizard</option>
                    {nftIds.filter((newWizard) => ![selectedNftId2, selectedNftId1, selectedNftId4].includes(newWizard.id))
                        .map((newWizard) => (
                            <option value={newWizard.id} key={newWizard.id}>
                              {newWizard.id}
                            </option>
                    ))}
                  </select>
                  </div>
                  {selectedNftId3 && (
                      <img src={nftIds.find(newWizard => newWizard.id === selectedNftId3).imageUrl}/>
                  )}
                </div>
                <div className="dropdown-wrapper">
                  <div>
                  <select
                      className="form-select"
                      value={selectedNftId4}
                      onChange={(e) => setSelectedNftId4(e.target.value)}>
                    <option value="">Wizard</option>
                    {nftIds.filter((newWizard) => ![selectedNftId2, selectedNftId3, selectedNftId1].includes(newWizard.id))
                        .map((newWizard) => (
                            <option value={newWizard.id} key={newWizard.id}>
                              {newWizard.id}
                            </option>
                    ))}
                  </select>
                  </div>
                  {selectedNftId4 && (
                      <img src={nftIds.find(newWizard => newWizard.id === selectedNftId4).imageUrl}/>
                  )}
                </div>
                <p>Joining the Circle: {selectedNftId1} + {selectedNftId2} + {selectedNftId3} + {selectedNftId4}</p>
                <div>
                  <Button variant="contained" color="info">
                    Cross the Ether(Burn)
                  </Button>
                </div>
              </div>
            </div>
        )}
      </div>
  );

}

export default App;
