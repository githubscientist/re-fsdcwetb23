import { useLoaderData, useNavigate } from "react-router";
import instance from "../instances/instance";

const Todo = () => {

    const navigate = useNavigate();
    const todo = useLoaderData();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    }

    const handleDelete = () => {
        confirm("Are you sure you want to delete this todo?") && instance.delete(`/todos/${todo.id}`)
            .then(() => {
                alert("Todo deleted successfully");

                setTimeout(() => {
                    navigate('/dashboard'); // Navigate to the todos list after deletion
                }, 500);
            })
    }

    return (
        <div>
            <h1>Todo Details</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Content:</strong> {todo.content}</p>
            <p><strong>Status:</strong> {todo.isCompleted ? "Completed" : "Incomplete"}</p>
            <p><strong>Created At:</strong> {new Date(todo.createdAt).toLocaleDateString()}</p>
            <div>
                <button onClick={handleBack}>Back</button> <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;