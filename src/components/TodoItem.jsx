const TodoItem = ({ todo }) => {

    return todo.isCompleted ? <li>{todo.content} {'✅'}</li> : <li>{todo.content}</li>;
}

export default TodoItem;