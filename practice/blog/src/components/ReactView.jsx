import React from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import ReactDescription from "./ReactDescription";
import Hooks from "./Hooks";
function ReactView() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ul>
            <li>
              <Link to={`${url}/hooks`}>Hooks</Link>
            </li>
            <li>
              <Link to={`${url}/react-description`}>Compoenent</Link>
            </li>
            <li>
              <Link to={`${url}/getitem`}>get Item</Link>
            </li>
          </ul>
        </Route>
        <Route path={`${path}/hooks`}>
          <Hooks />
        </Route>
        <Route path={`${path}/react-description`}>
          <ReactDescription />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Item />
        </Route>
      </Switch>
    </div>
  );
}

function Item() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  console.log(topicId)

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export default ReactView;
