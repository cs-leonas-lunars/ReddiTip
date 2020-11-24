import logo from './logo.svg';
import alien from './alien.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={alien} className="App-logo" alt="logo" />
        <p>
          Tip your favorite Reddit contributors with bitcoin over the Lightning Network
        </p>
        <a
          className="App-link"
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Reddit
        </a>
      </header>
    </div>
  );
}

export default App;
