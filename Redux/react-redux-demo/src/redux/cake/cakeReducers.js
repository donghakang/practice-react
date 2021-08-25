// contains reducers
import { BUY_CAKE, BUY_CAKES } from "./cakeTypes";

const initialState = { numOfCakes: 10 };

const cakeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_CAKES:
      return {
        ...state,
        numOfCakes: state.numOfCakes - actions.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
