import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import PokemonDetailsPage from "./components/PokemonDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <div className="logo-name"></div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pokemon/:id" component={PokemonDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
