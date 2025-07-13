import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            Use the navigation to log in or register if you are a new user.
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;