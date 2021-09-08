import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Hooks from "./react/Hooks";
export default (props) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${url}`}>Blog</Link>
          </li>
          <li>
            <Link to={`${url}/react`}>React</Link>
          </li>
          <li>
            <Link to={`${url}/javascript`}>Javascript</Link>
          </li>
          <li>
            <Link to={`${url}/programmers`}>Programmers</Link>
          </li>
          <li>
            <Link to={`${url}/daily`}>Diary</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
