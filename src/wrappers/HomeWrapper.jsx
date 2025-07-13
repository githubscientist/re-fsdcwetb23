import { Link, Outlet } from "react-router";

const HomeWrapper = () => {

    return (
        <div>
            <h1><Link
                to={"/"}
                style={{ textDecoration: "none", color: "black" }}
            >Todo App</Link></h1>
            <p>
                Welcome to the Todo App! Here you can manage your todos efficiently.
            </p>
            <Outlet />
        </div>
    )
}

export default HomeWrapper;