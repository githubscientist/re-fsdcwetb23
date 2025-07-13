import { Link, useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        alert('User Logged In!');

        setTimeout(() => {
            // Redirect to home page after login
            navigate('/dashboard');
        }, 500);
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
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