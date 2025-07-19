import todoServices from "../../services/todoServices";

const todosLoader = async () => {
    try {
        const todos = await todoServices.getTodos();
        return todos;
    } catch (error) {
        return [];
    }
}

export default todosLoader;