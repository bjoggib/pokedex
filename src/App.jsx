import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <div className="logo-name"></div>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
