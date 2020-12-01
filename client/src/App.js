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
        <button
          style={{
            position: "absolute",
            width: "150px",
            height: "50px",
            left: "50%",
            marginLeft: "-75px",
            bottom: "5vh",
            backgroundColor: "transparent",
            backdropFilter: "blur(35px)",
            borderRadius: "100vh",
            borderWidth: 0,
            cursor: "pointer",
            outline: "none",
            transition: "backgroundColor 0.35s",
            zIndex: 2,
          }}
        >
          <img
            alt="topper icon"
            id="topperIcon"
            src="/images/icon128.png"
            style={{
              position: "absolute",
              height: "30px",
              width: "30px",
              top: "10px",
              left: "14px",
              zIndex: 3,
            }}
          />
          <p
            id="topperText"
            style={{
              position: "absolute",
              width: "82.5%",
              top: "-1%",
              right: "0%",
              fontSize: "1rem",
              fontFamily: "Montserrat-Bold",
              textAlign: "center",
              color: "#444",
              cursor: "pointer",
              zIndex: 3,
            }}
          >
            Tip ETH
          </p>
        </button>
      </header>
    </div>
  );
}

function toggleMenu(status) {
  if (status) {
    document.getElementById("menu").style.cssText =
      "width: 0vw; box-shadow: 0px 0px 0px 0px #000";
    document.getElementById("closeMenu").style.cssText = "right: -75vw";
  } else {
    document.getElementById("menu").style.cssText =
      "width: 80vw; box-shadow: -20px 0px 40px -40px #000";
    document.getElementById("closeMenu").style.cssText = "right: 5vw";
  }
}

export default App;
