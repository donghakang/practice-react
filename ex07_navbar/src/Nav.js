import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
    const style = {
        color: "blue",
    };
    return (
        <nav>
            <Link style={style} exact to="/">
                <h3>Dongha Kang</h3>
            </Link>
            <ul>
                <Link to="/About">
                    <li>About</li>
                </Link>
                <Link to="/Project">
                    <li>Project</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
