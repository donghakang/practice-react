import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import allReducers from "./reducers"; // './reducers/index'

import { Provider } from "react-redux";
// const store = createStore()

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // Now, with provider, we can access the store data from anywhere
  <Provider store={store}>      
    <App />
  </Provider>,
  document.getElementById("root")
);
