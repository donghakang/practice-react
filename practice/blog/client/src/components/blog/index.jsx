import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import ReactView from "./ReactView";
import Header from "./header";

function Blog() {
  let { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <div>
      <Header />
      <Switch>
        <Router path="/blog">Blog goes here !</Router>
        <Router path="/blog/react">
          <ReactView />
        </Router>
      </Switch>
    </div>
    // <Switch>
    //   <Router path="/blog">
    //     <ReactView />
    //   </Router>
    // </Switch>
  );
}

export default Blog;
