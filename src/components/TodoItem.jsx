const TodoItem = ({ todo }) => {
    if (todo.isCompleted) {
        return <li>{todo.content} {'✅'}</li>
    } else {
        return <li>{todo.content}</li>
    }
}

export default TodoItem;