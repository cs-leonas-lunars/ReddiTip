import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" onClick={() => toggleMenu(true)}></div>
        <img id="brandIcon" src="/images/TipJar.png" />
        <h1 id="logoText">Topper</h1>
        <p id="paraText">Please Log In With Reddit</p>
        <button id="login">
          <div id="circle"></div>
          <img id="redditIcon" src="/images/reddit.png" />
          <p id="loginText">Log In</p>
        </button>
        <button id="signup">Create An Account</button>
        <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        <button id="menuButton" onClick={() => toggleMenu(false)}>
          =
        </button>
        <div id="menu"></div>
        <button id="closeMenu" onClick={() => toggleMenu(true)}>
          +
        </button>
      </header>
    </div>
  );
}

function toggleMenu(status) {
  if (status) {
    document.getElementById("overlay").style.cssText =
      "background-color: rgb(0, 0, 0, 0.15)";
    document.getElementById("menu").style.cssText =
      "width: 0vw; box-shadow: 0px 0px 0px 0px #000";
    document.getElementById("closeMenu").style.cssText = "right: -75vw";
  } else {
    document.getElementById("overlay").style.cssText =
      "background-color: rgb(0, 0, 0, 0.6)";
    document.getElementById("menu").style.cssText =
      "width: 80vw; box-shadow: -20px 0px 40px -40px #000";
    document.getElementById("closeMenu").style.cssText = "right: 5vw";
  }
}

export default App;
