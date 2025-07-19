import instance from "../../instances/instance";

const todoLoader = async ({ params }) => {
    try {
        const { id } = params;
        const response = await instance.get(`/todos/${id}`);
        return response.data;
    } catch (error) {
        return {};
    }
}

export default todoLoader;