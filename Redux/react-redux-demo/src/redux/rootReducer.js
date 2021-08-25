import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./icecream/iceCreamReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
