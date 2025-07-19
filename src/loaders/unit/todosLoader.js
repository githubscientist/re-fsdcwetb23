const todosLoader = async () => {
    try {
        const response = await fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export default todosLoader;