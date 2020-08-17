import React from "react";
import "./videoEmbed.css";

function VimeoEmbed({ videoId }) {
  const srcUrl = `https://player.vimeo.com/video/${videoId}?autoplay=0`;
  // example videoId 448500667
  return (
    <div>
      <div className="vimeoParentDiv mx-auto">
        <iframe
          src={srcUrl}
          className="vimeoIframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

export default VimeoEmbed;
