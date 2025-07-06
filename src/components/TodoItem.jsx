const TodoItem = ({ todo }) => {

    return <li>{todo.content} {todo.isCompleted && '✅'}</li>
}

export default TodoItem;