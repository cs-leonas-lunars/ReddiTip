import logo from "./logo.svg";
import alien from "./alien.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { loadWeb3, loadBlockchainData } from "./loadData";
import { me, login, logout } from "./userActions";
import Transactions from "./Transactions";

const App = () => {
  const [state, setState] = useState({ initialData: null, loading: true });
  const [user, setUser] = useState(null);

  //useEffect for blockchain stuff
  useEffect(() => {
    setState({ initialData: null, loading: true });
    loadWeb3()
      .then(() => loadBlockchainData())
      .then((x) => setState({ initialData: x, loading: false }));
  }, []);

  //useEffect for user
  useEffect(() => {
    setUser(null);
    me()
      .then((x) => setUser(x))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={alien} className="App-logo" alt="logo" />
        <p>
          Tip your favorite Reddit contributors with bitcoin over the Lightning
          Network
        </p>
        <a
          className="App-link"
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Reddit
        </a>
        <div>
          {!user ? (
            <button onClick={() => login()}>Login with Reddit</button>
          ) : (
            <Transactions user={user} />
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
