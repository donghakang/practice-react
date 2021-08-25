// contains reducers
import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = { numOfIceCream: 20 };

const iceCreamReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
