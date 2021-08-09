import React, { useState, useEffect, useCallback } from "react";

import "./App.css";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating... ");
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
};

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const onChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const onClick = () => {
    setDark((prevDark) => !prevDark);
  };
  return (
    <div style={theme}>
      <input type="number" name="" id="" value={number} onChange={onChange} />
      <button onClick={onClick}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
