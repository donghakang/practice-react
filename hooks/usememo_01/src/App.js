import React, { useState, useMemo } from "react";

// const memoizedResult = useMemo(compute, dependencies)

// ex)
/**
 * const memoizedResult = useMemo(() => { return expensiveFn(propA, propB)}, [propA, propB])
 */

function factorialFn(n) {
  console.log(` factorial ${n} is called`);
  return n <= 0 ? 1 : n * factorialFn(n - 1);
}

function App() {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  //const factorial = factorialFn(number);
  const factorial = useMemo(() => factorialFn(number), [number]);

  const onChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const onClick = () => setIncrement((i) => i + 1);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input type="number" name="number" value={number} onChange={onChange} />
      <h5>{factorial}</h5>
      <button onClick={onClick}>re-render</button>
    </div>
  );
}

export default App;
