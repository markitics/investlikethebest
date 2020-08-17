import React, { useEffect, Fragment, useContext } from "react";
// import NavBar from "./navBar";
import { toast } from "react-toastify";
import QueryString from "query-string";
import EpisodeContext from "../context/episodeContext";
import { getTranscript } from "../services/getTranscriptService";
import Transcript from "./transcript";

function Episode({ match, location }) {
  const { episode, updateEpisode, onClap } = useContext(EpisodeContext);

  const claps = episode.claps;

  const loadTranscript = () => {
    const currentEpisode = { ...episode };
    if (!currentEpisode.transcript) {
      console.log("Fetch transcript with getTranscript service...");
      currentEpisode.transcript = getTranscript();
      updateEpisode(currentEpisode);
    }
  };

  useEffect(() => {
    document.title = `${claps} 👏 Charlie Songhurst `;
    loadTranscript(); // updates the global state of the 'episode' object
  });

  //   const incrementClaps = () => {
  //     if (claps === 14)
  //       toast("This is a quick demo; number of claps is not saved.");
  //     setClaps(claps + 1);
  //   };

  const { redirect } = QueryString.parse(location.search);
  if (redirect) toast.warning("We just have ep 181 as an example");
  //   else toast("This transcript was time-stamped by Descript");

  return (
    <Fragment>
      <h1>Charlie Songhurst</h1>
      <div className="">Here we have details about one episode</div>
      <p>{claps} claps</p>
      <button className="btn btn-sm btn-light" onClick={() => onClap()}>
        Clap
      </button>
      {episode.transcript && <Transcript transcript={episode.transcript} />}
    </Fragment>
  );
}

export default Episode;
