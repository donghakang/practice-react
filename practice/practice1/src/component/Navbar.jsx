import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

export default function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "white",
  };

  return (
    <nav>
      <ol>
        <Link to="/about" className="link">
          <li className="content">About</li>
        </Link>
        <Link to="/project" className="link">
          <li className="content">Project</li>
        </Link>
        <Link to="/contact" className="link">
          <li className="content">Contact</li>
        </Link>
      </ol>
    </nav>
  );
}
