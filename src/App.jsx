// Uncontrolled Form or Component in React
// Becuase we are not using state to manage the form inputs, this is an uncontrolled component.
const App = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log(event.target.email.value, event.target.password.value);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="email..."
            name="email"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="password..."
            name="password"
          />
        </div>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default App;