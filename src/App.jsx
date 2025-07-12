import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducers/reactionReducer";

const App = () => {

  const [likes, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={() => dispatch({ type: "LIKE" })}>Like</button>
    </div>
  )
}

export default App;