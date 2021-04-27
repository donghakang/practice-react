// STORE --> GLOBALIZED STATE

// ACTION INCREMENT (not doing action but declaring )

// REDUCER (check which action is acting and how to update)

// DISPATCH (send action -> reducer and the core gets to update)

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

// action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// display it in console
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function