import { useState } from "react";

/*
  State -> 
  
  - State is a value that can change over time. 
  - State is used to store data that can be changed by the user or by the application.


  - Add a button to decrease the count
  - Add a button to reset the count to 0

  State Changes causes re-rendering of the component.
*/
function App() {

  const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0
  });

  console.log(reactions);

  const handleLike = () => {
    setReactions({
      ...reactions, likes: reactions.likes + 1
    });
  }

  const handleDislike = () => {
    setReactions({
      ...reactions, dislikes: reactions.dislikes + 1
    });
  }

  return (
    <>
      <button onClick={handleLike}>Like {reactions.likes}</button> <button onClick={handleDislike}>Dislike {reactions.dislikes}</button>
    </>
  )
}

export default App;