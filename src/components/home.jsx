import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const cover_art_url = process.env.REACT_APP_SERIES_COVER_ART_URL;
const notion_url = process.env.REACT_APP_NOTION_URL;

function Home(props) {
  toast("🏗 This is a work in progress! Check back soon."); // multi-coloured bar
  return (
    <header className="App-header">
      <div className="landing p-3" style={{ "text-align": "center" }}>
        <h2>“The best place to learn about business and investing”</h2>
        <img src={cover_art_url} className="homepage-logo m-2" alt="logo" />
        <p className="subtle">
          Our mission is to capture and share the best information for business{" "}
          <strong>builders and investors</strong>.
        </p>
        <p>
          Join our <strong>ever-evolving university</strong> for investors,
          operators, and entrepreneurs.
        </p>
        <a
          className="App-link btn btn-info m-2"
          href={notion_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Mark's initial ideas
        </a>
        <Link to="/episode/181/transcript">
          <span className="btn btn-default btn-dark m-2">
            See one sample transcript
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Home;
