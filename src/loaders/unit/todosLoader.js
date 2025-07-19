import instance from "../../instances/instance";

const todosLoader = async () => {
    try {
        const response = await instance.get(`/todos`);
        return response.data;
    } catch (error) {
        return [];
    }
}

export default todosLoader;