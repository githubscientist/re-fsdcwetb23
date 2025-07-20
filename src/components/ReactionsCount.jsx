import { useContext } from "react";
import { ReactionsContext } from "../App";

const ReactionsCount = () => {

    const { likes, dislikes } = useContext(ReactionsContext);

    return (
        <div>
            <h2>Likes: {likes}</h2>
            <h2>Dislikes: {dislikes}</h2>
        </div>
    )
}

export default ReactionsCount;