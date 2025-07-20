const Actions = ({ handleLike, handleDislike }) => {
    return (
        <div>
            <button onClick={handleLike}>Like</button> <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default Actions;