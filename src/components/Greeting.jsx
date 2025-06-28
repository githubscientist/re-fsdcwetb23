// child component of App
function Greeting(props) {

    console.log(props);

    return (
        <>
            <h1>Hello, {props.loggedInUser}!</h1>
            <p>This is my First Component</p>
        </>
    )
}

export default Greeting;