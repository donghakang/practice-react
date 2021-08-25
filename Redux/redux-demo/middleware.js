const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// redux logger
console.log("Middleware");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator: a function that returns action
function buyCake() {
  // action: object with the type property
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIcecream() {
  // action: object with the type property
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// (previousState, action) => newState
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};

// Reducer function: takes initial state and returns the state after it is updated
const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
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
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state: ", store.getState());

// register
const unsubscribe = store.subscribe(() => {});

// update state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
console.log("Initial state: ", store.getState());

// unregister
unsubscribe();
