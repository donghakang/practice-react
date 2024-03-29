import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from './components/Home'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    
  );
}

export default App;
