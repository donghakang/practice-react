import "./App.css"
import Nav from './Nav'

import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'


import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
