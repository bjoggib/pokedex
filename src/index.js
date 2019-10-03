import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Relative imports
import App from "./App";
import configureStore from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
