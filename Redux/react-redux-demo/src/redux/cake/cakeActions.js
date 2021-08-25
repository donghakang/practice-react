// define actions here

import { BUY_CAKE } from "./cakeTypes";
import { BUY_CAKES } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const buyCakes = (cakes) => {
  return {
    type: BUY_CAKES,
    payload: cakes,
  };
};
