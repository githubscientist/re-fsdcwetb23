import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import todoServices from '../services/todoServices';

const Dashboard = () => {

    const navigate = useNavigate();
    const todos = useLoaderData();
    const [newTodo, setNewTodo] = useState('');

    const handleLogout = () => {
        alert('User Logged Out!');

        setTimeout(() => {
            navigate('/login');
        }, 500);
    }

    const handleAddTodo = async (event) => {
        event.preventDefault();
        await todoServices.createTodo(newTodo)
            .then(() => {
                alert('Todo added successfully!');

                // clear the input field
                setNewTodo('');

                // reload the todos
                navigate('/dashboard');
            })
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

            <div>
                <form onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        size={50}
                    />
                    <input
                        type="submit"
                        value="Add Todo"
                    />
                </form>
            </div>
        </div>
    )
}

export default Dashboard;