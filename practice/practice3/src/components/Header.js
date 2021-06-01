import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

export default function Header() {
  const linkStyle = { textDecoration: "none", color: "black" };
  return (
    <header>
      <ol className="header">
        <Link to="/about" style={linkStyle}>
          <li>About</li>
        </Link>
        <Link to="/project" style={linkStyle}>
          <li>Project</li>
        </Link>
      </ol>
    </header>
  );
}
