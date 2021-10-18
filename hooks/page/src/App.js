import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Effect from "./components/useEffect";
import State from "./components/useState";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/state">
          <State />
        </Route>
        <Route path="/effect">
          <Effect />
        </Route>
        {/* <Route path="/callback">
          <Home />
        </Route>
        <Route path="/memo">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
