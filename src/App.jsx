import { useDispatch, useSelector } from "react-redux";
import { dislike, like, selectDislikes, selectLikes } from "./redux/features/reactionSlice";

const App = () => {

  const likes = useSelector(selectLikes);
  const dislikes = useSelector(selectDislikes);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(like());
  }

  const handleDislike = () => {
    dispatch(dislike());
  }

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>

      <h1>Dislikes: {dislikes}</h1>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default App;