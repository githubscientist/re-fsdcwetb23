import { useContext } from "react";
import { ReactionsContext } from "../App";

const TotalReactions = () => {

    // 3. Consume the context
    const { likes, dislikes } = useContext(ReactionsContext);

    return (
        <>
            <h1>Total Reactions: {likes + dislikes} </h1>
        </>
    )
}

export default TotalReactions;