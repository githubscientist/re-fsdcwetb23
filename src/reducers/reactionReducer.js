const initialState = 0;

const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return state + 1;
    }
}

export { initialState, reducer };