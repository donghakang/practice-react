import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';


// STORE: globalize state

// ACTION: describes what we want to do
//         - increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER: describes how actions transforms the state, to the next state
//          modify the state
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()))

// DISPATCH: execute the action
store.dispatch(increment()) 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

