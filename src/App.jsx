import { useState } from "react";

/*
  State -> 
  
  - State is a value that can change over time. 
  - State is used to store data that can be changed by the user or by the application.


  - Add a button to decrease the count
  - Add a button to reset the count to 0
*/
function App() {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
    <>
      <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>Dislike {dislikes}</button>
    </>
  )
}

export default App;