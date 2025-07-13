import { Link } from "react-router";

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <input
                        type="email"
                        placeholder="Email..."
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="Password..."
                    />
                </div>

                <br />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div >
    )
}

export default Login;