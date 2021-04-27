import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";


function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Is logged? </h3> : ""}
    </div>
  );
}

export default App;
