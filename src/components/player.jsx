import React, { useContext } from "react";
import PlayerContext from "../context/playerContext";

function Player(props) {
  const { player, updatePlayer } = useContext(PlayerContext);
  const decidePlayerClasses = () => {
    let classes = "player mt-auto py-3";
    if (!player.playerIsVisible) classes += " hidden";
    return classes;
  };

  return (
    <div className={decidePlayerClasses()}>
      Big player here! Sticky, along the bottom, as user navigates the rest of
      the site.
    </div>
  );
}

export default Player;
