import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const Todo = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {

        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos/${id}`)
            .then(response => response.json())
            .then(data => {
                setTodo(data);
            })
            .catch(error => {
                console.error('Error fetching todo:', error);
            });
    }, []);

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    }

    return (
        <div>
            <h1>Todo Details</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Content:</strong> {todo.content}</p>
            <p><strong>Status:</strong> {todo.isCompleted ? "Completed" : "Incomplete"}</p>
            <p><strong>Created At:</strong> {new Date(todo.createdAt).toLocaleDateString()}</p>
            <div>
                <button onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}

export default Todo;