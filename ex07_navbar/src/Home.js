import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>
                Home Page
                </div>
            <Link to='/About'><div>HELLL</div> </Link>
            <Link to='/Project'>Click To go to Contact</Link>
            <Link to='/Contact'>Click To go to Contact</Link>
        </div>

    );
}