import React from "react";
import { Link } from "react-router-dom";
function Header({home}) {

    // if home, toggle is allowed.
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link to="/state" exact>
              useState
            </Link>
          </li>
          <li>
            <Link to="/effect" exact>
              useEffect
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

