import React, { useContext } from "react";
import EpisodeContext from "../context/episodeContext";
import "./likeButton.css";

function LikeButton({ part }) {
  const { onLike } = useContext(EpisodeContext);
  let classes = "likeButton fa fa-heart";
  if (!part.liked) classes += "-o";
  let style = { cursor: "pointer" };
  style["color"] = part.liked ? "red" : "";
  return (
    <div className="likeContainer">
      <i className={classes} style={style} onClick={() => onLike(part)}></i>
    </div>
  );
}

export default LikeButton;
