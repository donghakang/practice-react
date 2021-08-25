import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function CakeContainerHook() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default CakeContainerHook;
