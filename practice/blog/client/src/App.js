import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/home/Header";
import Home from "./components/home";
import Blog from "./components/blog";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
