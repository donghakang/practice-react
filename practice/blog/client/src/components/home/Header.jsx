import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Work">work</Link>
          </li>
          {/* <li>
            <Link to="/daily">Diary</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
