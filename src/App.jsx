import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'LIKE') {
    return state + 1;
  }
}

const App = () => {

  const [likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch({ type: "LIKE" });
  }

  useEffect(() => {
    console.log(`You have ${likes} likes`);
  }, [likes]);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;