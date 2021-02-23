import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const style = {
    color: "white",
  };
  return (
    <nav>
      <Link style={style} exact to="/">
        <h3>Logo</h3>
      </Link>
      <ul>
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
