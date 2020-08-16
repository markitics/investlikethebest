import React from 'react';
import './App.css';

const cover_art_url = "https://ssl-static.libsyn.com/p/assets/0/b/c/e/0bce06651e36264f/Invest_Like_The_Best_Podcast_Cover_1400x1400.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover_art_url} className="App-logo" alt="logo" />
        <h1>Invest Like the Best</h1>
        <p>
          We're live. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
