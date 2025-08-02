import { useReducer } from "react";

const initialState = {
  likes: 0
}

const reducer = (state, action) => {
  if (action.type === 'LIKE') {
    return {
      ...state,
      likes: state.likes + 1
    }
  }
  return state;
}

const App = () => {

  const [reactions, dispatch] = useReducer(reducer, initialState);

  const handleLike = () => {
    dispatch({ type: 'LIKE' });
  }

  console.log(reactions);

  return (
    <div>
      <h1>Likes: {reactions.likes}</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;