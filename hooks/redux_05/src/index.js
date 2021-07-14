import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// PROVIDER
// pass in the store  to App level, so it can pass the access to store
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
