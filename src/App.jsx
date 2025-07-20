import { useState } from "react";
import Reactions from "./components/Reactions";
import Actions from "./components/Actions";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <Reactions
        likes={likes}
        dislikes={dislikes}
      />
      <Actions
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </div>
  )
}

export default App;