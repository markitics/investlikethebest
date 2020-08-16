import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Episode from "./components/episode";
import NotFound from "./components/notFound";
import About from "./components/about";

// const START_CLAPS = 14;

class App extends Component {
  // state = { claps: START_CLAPS };
  render() {
    return (
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
      </div>
    );
  }
}

export default App;
