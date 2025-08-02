import { useReducer } from "react";
import reducer from "./reducers/reducer";

// TODO: Move the reducer to  a separate file
// TODO: Add more actions like DISLIKE, RESET

const initialState = {
  likes: 0,
  dislikes: 0
}

const App = () => {

  const [reactions, dispatch] = useReducer(reducer, initialState);

  const handleLike = () => {
    dispatch({ type: 'LIKE' });
  }

  const handleDislike = () => {
    dispatch({ type: 'DISLIKE' });
  }

  return (
    <div>
      <h1>Likes: {reactions.likes}</h1>
      <button onClick={handleLike}>Like</button>

      <h1>Dislikes: {reactions.dislikes}</h1>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default App;