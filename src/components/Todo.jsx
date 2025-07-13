import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Todo = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [todo, setTodo] = useState({});

    useEffect(() => {
        const todoId = query.get("id");

        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos/${todoId}`)
            .then(response => response.json())
            .then(data => {
                setTodo(data);
            })
            .catch(error => {
                console.error('Error fetching todo:', error);
            });
    }, [location.search]);

    return (
        <div>
            <h1>Todo Details</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Content:</strong> {todo.content}</p>
            <p><strong>Status:</strong> {todo.isCompleted ? "Completed" : "Incomplete"}</p>
            <p><strong>Created At:</strong> {new Date(todo.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default Todo;