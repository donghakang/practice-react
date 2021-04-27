import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { createStore, combineReducers } from "redux";
import allReducers from "./reducers"; // you don't have to have index at the end
import { createStore } from "redux";
import { Provider } from "react-redux";

// const store = createStore()  not going to work because there are 2 reducers. --> combineReducers
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
