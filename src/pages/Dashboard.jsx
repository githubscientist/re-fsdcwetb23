import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import todoServices from '../services/todoServices';
import TodoItem from '../components/TodoItem';

const Dashboard = () => {

    const navigate = useNavigate();
    const todos = useLoaderData();
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingTodo, setIsEditingTodo] = useState({});

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

    const handleUpdateTodo = async (id, todo) => {
        await todoServices.updateTodo(id, todo)
            .then(() => {
                // alert('Todo updated successfully!');

                // reload the todos
                navigate('/dashboard');
            })
    }

    const handleEditTodo = (event) => {
        event.preventDefault();

        todoServices.editAndUpdateTodo(isEditingTodo.id, { content: newTodo })
            .then(() => {
                alert('Todo updated successfully!');

                // clear the input field
                setNewTodo('');

                // reset editing state
                setIsEditing(false);
                setIsEditingTodo({});

                // reload the todos
                navigate('/dashboard');
            })
            .catch(error => {
                console.error("Error updating todo:", error);
            });
        setIsEditing(false);
        setIsEditingTodo({});
        setNewTodo(''); // Clear input after editing
    }

    const toggleEditMode = () => {
        setIsEditing(true);
        setNewTodo(''); // Clear input when toggling edit mode
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>User logged in! <button onClick={handleLogout}>logout</button></p>

            <div>
                Filter: <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
                &nbsp;&nbsp;
                <strong>{todos.filter(todo => todo.isCompleted).length} out of {todos.length} tasks done</strong>
            </div>
            <hr />
            <br />
            {
                todos.length > 0 ? (
                    <div>
                        {
                            todos
                                .filter(todo => {
                                    if (filter === 'completed') {
                                        return todo.isCompleted;
                                    } else if (filter === 'pending') {
                                        return !todo.isCompleted;
                                    }
                                    return true; // 'all' case
                                })
                                .sort((a, b) => a.isCompleted - b.isCompleted)
                                .map(todo => (
                                    <TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        handleUpdateTodo={handleUpdateTodo}
                                        toggleEditMode={toggleEditMode}
                                        setNewTodo={setNewTodo}
                                        setIsEditingTodo={setIsEditingTodo}
                                    />
                                ))
                        }
                    </div>
                ) : (
                    <p>No todos found.</p>
                )
            }
            <br />
            <br />
            <div>
                <form onSubmit={isEditing ? handleEditTodo : handleAddTodo}>
                    <input
                        type="text"
                        placeholder={isEditing ? 'Update your todo...' : 'Add a new todo...'}
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        size={50}
                    />
                    <input
                        type="submit"
                        value={isEditing ? 'Update Todo' : 'Add Todo'}
                    />
                </form>
            </div>
        </div>
    )
}

export default Dashboard;