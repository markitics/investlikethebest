import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Episode from "./components/episode";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ToastContainer autoClose={7000} />
        <Switch>
          <Route path="/episode/181" component={Episode} />
          <Redirect from="/episode/:id" to="/episode/181?redirect=yes" />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/products"
            render={(props) => <Episode sortBy="newest" {...props} />}
          />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
