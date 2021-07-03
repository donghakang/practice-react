import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

export default function Header() {
  return (
    <nav className="nav-bar">
      <div className="brand">
        <Link to="/" className="nav-link">
          ㄷㅎ
        </Link>
      </div>
      <ul>
        <li className="menu">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="menu">
          <Link to="/project" className="nav-link">
            Project
          </Link>
        </li>
      </ul>
    </nav>
  );
}
