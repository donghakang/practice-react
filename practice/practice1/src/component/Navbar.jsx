import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

export default function Navbar() {
  const linkStyle = { position:"absolute", top:"90%", right:"0%", backgroundColor: "green", textDecoration: "none", color: "black", zIndex: "1",};
  return (
    <header  style={linkStyle}>
      <ol className="header">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/project">
          <li>Project</li>
        </Link>
      </ol>
    </header>
  );
}
