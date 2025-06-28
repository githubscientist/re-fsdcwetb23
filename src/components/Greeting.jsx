// child component of App
function Greeting({ name, email }) {

    return (
        <>
            <h1>Hello, {name}!</h1>
            <p>You are logged in using {email}</p>
        </>
    )
}

export default Greeting;