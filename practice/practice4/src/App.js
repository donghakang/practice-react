import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/project" component={ Project } />
          <Route path="/project" component={ Contact } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
