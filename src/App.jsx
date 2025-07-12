import { useReducer } from "react";
import { initialState, reducer } from "./reducers/reactionReducer";

const App = () => {

  const [reactions, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "LIKE" })}>Like {reactions.likes} </button>
      &nbsp; <button onClick={() => dispatch({ type: "DISLIKE" })}>Dislike {reactions.dislikes}</button>
    </div>
  )
}

export default App;