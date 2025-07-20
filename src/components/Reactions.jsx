import ReactionsCount from "./ReactionsCount";

const Reactions = ({ likes, dislikes }) => {
    return (
        <div>
            <h1>Total Reactions: {likes + dislikes} </h1>
            <ReactionsCount
                likes={likes}
                dislikes={dislikes}
            />
        </div>
    )
}

export default Reactions;