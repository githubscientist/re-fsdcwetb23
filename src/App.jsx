import { useReducer } from "react";
import reducer from "./reducers/reducer";

// TODO: Move the reducer to  a separate file
// TODO: Add more actions like DISLIKE, RESET

const initialState = {
  likes: 0
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