import { useContext } from "react";
import { ReactionsContext } from "../App";

const Actions = () => {

    const { handleLike, handleDislike } = useContext(ReactionsContext);

    return (
        <div>
            <button onClick={handleLike}>Like</button> <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default Actions;