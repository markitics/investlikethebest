import React from "react";
import VimeoEmbed from "./vimeoEmbed";

function OneClickButtons(props) {
  const feedurl_without_protocol = "feed.awesound.com/iltb";
  const generateQRCodeUrl = (url) => {
    return "https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl=podcast://feed.awesound.com/iltb";
  };
  return (
    <div className="oneClickSubscribeInApp">
      {/* <a
        href={"podcast://" + feedurl_without_protocol}
        className="btn btn-default oneclick-app-subscribe-button"
        name="ios-apple-podcasts"
      >
        <img
          src="https://cdn2.awesound.com/static/img/app-icons/ios/ios9-podcasts-app-tile.png"
          className="oneclick-app-icon"
        />
        <span className="preinstalled-app">Open in one click</span>
        <br />
        <span className="oneclick-cta-text">
          <b>Apple Podcasts</b>
        </span>
      </a> */}
      <p>
        Most folks listen in a podcast app, not on a website. So, simply adding
        images and clickable chapter marks could be an easy win.
      </p>

      <p>
        Try this one-episode demo on your iPhone:{" "}
        <a href={"podcast://" + feedurl_without_protocol}>
          <img src="https://cdn2.awesound.com/static/img/app-icons/ios/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg" />
          <br />
          <br />
          <div className="imageWrapper qrCode mx-auto">
            <img src={generateQRCodeUrl()}></img>
          </div>
        </a>
        <br />
        <p>
          On iPhone, that link will automatically open up Apple Podcasts, like
          this:
        </p>
        <VimeoEmbed videoId="448500667" />
      </p>
    </div>
  );
}

export default OneClickButtons;
