import Web3 from "web3";
import Fortmatic from "fortmatic";
// import EtherExchange from "../abis/EtherExchange.json";

let fm = new Fortmatic("pk_test_E28EBDED6FA415DC");
let web3 = new Web3(fm.getProvider());

export const loadWeb3 = async () => {
  if (window.ethereum) {
    // Use MetaMask provider
    window.web3 = new Web3(window.ethereum);
  } else {
    // Use Fortmatic provider
    window.web3 = new Web3(fm.getProvider());
  }

  //Legacy dApp browsers which web3 is still being injected
  if (typeof web3 !== "undefined") {
    // Use injected provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    // Use Fortmatic provider
    window.web3 = new Web3(fm.getProvider());
  }
};

export const loadBlockchainData = async () => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const networkId = await web3.eth.net.getId();

  return {
    account: accounts[0],
    networkId: networkId,
  };
  // load contract
  // const etherExchangeData = EtherExchange.networks[networkId];

  // change below
  // if (etherExchangeData) {
  //   const etherExchange = new web3.eth.Contract(
  //     EtherExchange.abi,
  //     etherExchangeData.address
  //   );
  //   let balance = await etherExchange.methods.balanceOf(accounts[0]).call();
  //   return {
  //     account: accounts[0],
  //     networkId: networkId,
  //     exchange: etherExchange,
  //     balance: balance.toString(),
  //   };
  // } else {
  //   window.alert("EtherExchange contract not deployed to detected network");
  // }
};
