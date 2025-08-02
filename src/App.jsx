import { useDispatch, useSelector } from "react-redux";
import { like, selectLikes } from "./redux/features/reactionSlice";

const App = () => {

  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(like());
  }

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;