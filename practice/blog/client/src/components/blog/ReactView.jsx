import React from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route,
} from "react-router-dom";

function ReactView() {
  let { path, url } = useRouteMatch();
  return <div>React Contents go here</div>;
}

export default ReactView;
