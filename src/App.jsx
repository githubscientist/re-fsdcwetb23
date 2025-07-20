import { createContext, useState } from "react";
import Reactions from "./components/Reactions";
import Actions from "./components/Actions";

// 1. Create a context
export const ReactionsContext = createContext();

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
    <>
      <ReactionsContext.Provider value={{ likes, dislikes, handleLike, handleDislike }}>
        <Reactions />
        <Actions />
      </ReactionsContext.Provider>
    </>
  )
}

export default App;