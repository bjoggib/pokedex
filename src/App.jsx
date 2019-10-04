import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import PokemonDetailsPage from "./components/PokemonDetailsPage";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/NavBar";
import MyPokeDexPage from "./components/MyPokeDexPage";

const App = () => (
  <Router>
    <div className="container mt-3">
      <NavBar />
      <div className="logo-name"></div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/:id" component={PokemonDetailsPage} />
        <Route path="/mypokedex" component={MyPokeDexPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
