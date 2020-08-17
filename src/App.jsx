import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Episode from "./components/episode";
import NotFound from "./components/notFound";
import About from "./components/about";
import EpisodeContext from "./context/episodeContext";
import PlayerContext from "./context/playerContext";
import Player from "./components/player";

const START_CLAPS = 14;

class App extends Component {
  state = {
    episode: {
      claps: START_CLAPS,
      cover_art_url:
        "http://investorfieldguide.com/wp-content/uploads/2020/07/Charlie-Songhurst-1024x1024.png",
    },
    player: {
      playerIsVisible: false,
      playingState: "stopped",
      currentTime: 0.0,
      episodePlaying: { title: "Charlie Songhurst", url: "/episode/181" },
    },
    notifications: { shown: false },
  };

  handleClap = () => {
    const episode = { ...this.state.episode };
    if (episode.claps === 14)
      toast.info(
        "This is a quick demo; number of claps is reset when you close this page."
      );

    episode.claps += 1;
    this.setState({ episode });
  };

  updateEpisode = (episode) => {
    this.setState({ episode });
  };

  updateNotificationsState = (newState) => {
    this.setState({ notifications: newState });
  };

  updatePlayer = (player) => this.setState({ player });

  render() {
    const episode = this.state.episode;
    return (
      // const onClap = this.handleClap;
      <PlayerContext.Provider
        value={{ player: this.state.player, updatePlayer: this.updatePlayer }}
      >
        <EpisodeContext.Provider
          value={{
            episode,
            onClap: this.handleClap,
            updateEpisode: this.updateEpisode,
          }}
        >
          <div className="App">
            <NavBar />
            <div className="container main-content">
              <ToastContainer autoClose={7000} />
              <Switch>
                <Route path="/episode/181" component={Episode} />
                <Redirect from="/episode/:id" to="/episode/181?redirect=yes" />
                <Route path="/not-found" component={NotFound} />
                <Route path="/about" component={About} />
                <Route
                  path="/products"
                  render={(props) => <Episode sortBy="newest" {...props} />}
                />
                <Route path="/" exact component={Home} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
            <Player />
          </div>
        </EpisodeContext.Provider>
      </PlayerContext.Provider>
    );
  }
}

export default App;
