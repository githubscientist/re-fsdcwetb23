import React from 'react'
import { useNavigate } from 'react-router';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        alert('User Logged Out!');

        setTimeout(() => {
            navigate('/login');
        }, 500);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>User logged in! <button onClick={handleLogout}>logout</button></p>
        </div>
    )
}

export default Dashboard