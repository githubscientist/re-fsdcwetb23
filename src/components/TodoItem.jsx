import './TodoItem.css';

const TodoItem = ({ todo }) => {
    return (
        <>
            <li className="item">
                <input type="checkbox"
                    checked={todo.isCompleted}
                />
                <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.content}</p>
            </li >
        </>
    )
}

export default TodoItem;