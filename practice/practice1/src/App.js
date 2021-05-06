import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './component/Home'
import Project from './component/Project'
import About from './component/About'



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
