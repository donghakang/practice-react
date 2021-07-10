import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, multiply} from './actions/counterActions'
import {login, logout} from './actions/logActions'

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const loggedReducer = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply(5))}>+</button>
      
      <h3>Valuable information  </h3>
      <button onClick={() => dispatch(login())}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
      {loggedReducer ? <div>Logged In!</div> : <div>Not logged in</div>}
    </div>
  );
}

export default App;
