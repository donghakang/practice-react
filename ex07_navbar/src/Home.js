import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>
                Home Page
                </div>
            <Link to='/Contact'>Click To go to Contact</Link>
        </div>

    );
}