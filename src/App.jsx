import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./components/HomePage";
import PokemonDetailsPage from "./components/PokemonDetailsPage";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/NavBar";
import MyPokeDexPage from "./components/MyPokeDexPage";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <NavBar />
    <div className="container mt-3">
      <div className="logo-name mt-3"></div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/:id" component={PokemonDetailsPage} />
        <Route path="/mypokedex" component={MyPokeDexPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar closeButton={false} />
    </div>
  </Router>
);

export default App;
