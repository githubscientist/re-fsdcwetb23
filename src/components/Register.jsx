import { Link, useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        alert('User Registered!');

        setTimeout(() => {
            // Redirect to login page after registration
            navigate('/login');
        }, 500);
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
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
                    <button type="submit">Register</button>
                </div>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Register;