const initialState = 0;

const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return state + 1;
    } else if (action.type === 'DISLIKE') {
        return state - 1;
    }
    return state; // Return the current state for any other action
}

export { initialState, reducer };