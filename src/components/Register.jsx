import { Link } from "react-router";

const Register = () => {
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