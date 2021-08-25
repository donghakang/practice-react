import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakes } from "../redux";

function NewCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCakes(number))}>Buy cake</button>
    </div>
  );
}

export default NewCakeContainer;
