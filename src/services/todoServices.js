import instance from "../instances/instance";

const todoServices = {
    getTodos: async () => {
        try {
            const response = await instance.get(`/todos`);
            return response.data;
        } catch (error) {
            return [];
        }
    },
    getTodoById: async (id) => {
        try {
            const response = await instance.get(`/todos/${id}`);
            return response.data;
        } catch (error) {
            return {};
        }
    },
    createTodo: async (todo) => {
        try {
            const newTodo = {
                content: todo,
                isCompleted: false
            }
            const response = await instance.post(`/todos`, newTodo);
            return response.data;
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    },
    updateTodo: async (id, todo) => {
        try {
            const updatedTodo = {
                isCompleted: !todo.isCompleted
            }
            const response = await instance.put(`/todos/${id}`, updatedTodo);
            return response.data;
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    },
    deleteTodo: async (id) => {
        try {
            const response = await instance.delete(`/todos/${id}`)
            return response.data;
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    },
    editAndUpdateTodo: async (id, todo) => {
        try {
            const updatedTodo = {
                content: todo.content,
            }

            const response = await instance.put(`/todos/${id}`, updatedTodo);

            return response.data;
        } catch (error) {
            console.error("Error editing and updating todo:", error);
        }
    }
}

export default todoServices;