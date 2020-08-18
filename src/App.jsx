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
    notifications: {
      clapNotificationShown: false,
      likeNotificationShown: false,
      homeNotificationShown: false,
    },
  };

  handleClap = () => {
    const episode = { ...this.state.episode };
    if (!this.state.notifications.clapNotificationShown) {
      toast.info(
        "This is a quick demo; number of claps is reset when you close this page."
      );
      const notifications = { ...this.state.notifications };
      notifications.clapNotificationShown = true;
      this.setState({ notifications });
    }

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

  clickLike = (part) => {
    if (!this.state.notifications.likeNotificationShown) {
      toast.success(
        "Great! You can view all your highlights in the 'My highlights' tab."
      );
      toast(
        "Note: In this demo, your likes are not saved when you close this page."
      );
      const notifications = { ...this.state.notifications };
      notifications.likeNotificationShown = true;
      this.setState({ notifications });
    } // since we have nust one episode for now,
    // episodeId isn't actually used
    console.log("Clicked to like part:", part.text);
    let episode = { ...this.state.episode };
    let parts = [...episode.transcript.parts];
    const index = parts.indexOf(part); // index of liked movie
    parts[index] = { ...parts[index] }; // modify only this one object
    parts[index].liked = !parts[index].liked;
    episode.transcript.parts = parts;
    this.setState({ episode });
  };

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
            onLike: this.clickLike,
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
