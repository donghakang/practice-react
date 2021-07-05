import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav-bar">
        <div className="brand">
          <Link to="/" className="nav-link">
            <span>d</span>
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
    </div>
  );
}
