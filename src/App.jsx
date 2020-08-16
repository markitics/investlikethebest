import React from "react";
import "./App.css";

const cover_art_url = process.env.REACT_APP_SERIES_COVER_ART_URL;
const notion_url = process.env.REACT_APP_NOTION_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing">
          <h1>The best place to learn about business and investing</h1>
          <img src={cover_art_url} className="App-logo" alt="logo" />
          <p className="subtle">
            Our mission is to capture and share the best information for
            business <strong>builders and investors</strong>.
          </p>
          <p>
            Join our <strong>ever-evolving university</strong> for investors,
            operators, and entrepreneurs.
          </p>
          <a
            className="App-link"
            href={notion_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Mark's ideas
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
