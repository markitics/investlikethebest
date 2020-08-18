import React, { useEffect, Fragment, useContext } from "react";
// import NavBar from "./navBar";
import { toast } from "react-toastify";
import QueryString from "query-string";
import EpisodeContext from "../context/episodeContext";
import { getTranscript } from "../services/getTranscriptService";
import Transcript from "./transcript";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import KeyPoints from "./keyPoints";

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

  const getCoverArtUrl = () => episode.cover_art_url;

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
  // else toast("'Search' and 'My notes' are dummy for now.");

  return (
    <Fragment>
      <div className="episode-top p-4">
        <h1 className="guest-name">Charlie Songhurst</h1>
        <h2 className="guest-name">Lessons from investing in 483 companies</h2>
        <div className="episode-top-bar py-2">
          <img src={getCoverArtUrl(episode)} width="100" />
          <div className="clapper">
            <p>{claps} claps</p>
            <button className="btn btn-sm btn-light" onClick={() => onClap()}>
              Clap
            </button>
          </div>
        </div>
        {/* <p> <i>'Search' and 'My notes' are just dummy – for now.</i> </p> */}
      </div>
      <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-link" to="/episode/181">
              🔑 Ideas
            </NavLink>
            <NavLink className="nav-link" to="/episode/181/transcript">
              Transcript
            </NavLink>
            <NavLink className="nav-link" to="/episode/181/my-highlights">
              My highlights
            </NavLink>
          </div>
        </div>
      </nav>

      <Switch>
        <Route
          path="/episode/181/transcript"
          render={(props) =>
            episode.transcript && <Transcript transcript={episode.transcript} />
          }
        />
        <Route
          path="/episode/181/my-highlights"
          render={(props) =>
            episode.transcript && (
              <Transcript
                transcript={episode.transcript}
                showOnlyLiked={true}
              />
            )
          }
        />
        <Route exact path="/episode/181" component={KeyPoints} />
      </Switch>
    </Fragment>
  );
}

export default Episode;
