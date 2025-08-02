const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return {
            ...state,
            likes: state.likes + 1
        }
    }
    return state;
}

export default reducer;