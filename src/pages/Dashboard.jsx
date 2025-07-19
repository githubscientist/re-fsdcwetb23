import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Dashboard = () => {

    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

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
            {
                todos.length > 0 ? (
                    <ul>
                        {
                            todos.map(todo => (
                                <li key={todo.id}>
                                    <Link to={`/todo/${todo.id}`}>
                                        {todo.content}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p>No todos found.</p>
                )
            }
        </div>
    )
}

export default Dashboard;