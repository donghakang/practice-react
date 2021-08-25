import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainerHook() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
    </div>
  );
}

export default IceCreamContainerHook;
