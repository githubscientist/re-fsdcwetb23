const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return {
            ...state,
            likes: state.likes + 1
        }
    } else if (action.type === 'DISLIKE') {
        return {
            ...state,
            dislikes: state.dislikes + 1
        }
    }

    return state; // Default case, return current state
}

export default reducer;