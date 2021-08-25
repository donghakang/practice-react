const redux = require("redux");
const createStore = redux.createStore;

console.log("redux demo");

const BUY_CAKE = "BUY_CAKE";

// Action creator: a function that returns action
function buyCake() {
  // action: object with the type property
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
};

// Reducer function: takes initial state and returns the state after it is updated
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Store: holds the application state,
//        allows access to state (getState())
//        allows the state to be updated (dispatch(action)) and
//        registers listeners (subscribe(listener))
//        handles unregistering of listeners (function returned by subscribe(listener))

// createStore: takes reducer as a parameter
// create redux store
const store = createStore(reducer);
console.log("Initial state: ", store.getState());

// register
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// update state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("Initial state: ", store.getState());

// unregister
unsubscribe();
