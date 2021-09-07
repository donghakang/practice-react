import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import ReactView from "./components/ReactView.jsx";
import JavascriptView from "./components/JavascriptView.jsx";
import ProgrammersView from "./components/ProgrammersView.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/react">
          <ReactView />
        </Route>
        <Route path="/javascript">
          <JavascriptView />
        </Route>
        <Route path="/programmers">
          <ProgrammersView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
