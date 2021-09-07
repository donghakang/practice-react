import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/javascript">Javascript</Link>
          </li>
          <li>
            <Link to="/programmers">Programmers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
