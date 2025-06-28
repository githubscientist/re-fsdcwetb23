// child component of App
function Greeting(props) {

    const name = 'sathish';
    const email = 'sathish@guvi.in';

    props.dataFromChild(name, email);

    return (
        <>
            <h1>Hello, {name}!</h1>
            <p>You are logged in using {email}</p>
        </>
    )
}

export default Greeting;