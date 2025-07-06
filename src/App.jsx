const App = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);
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
            id="email"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="password..."
            name="password"
            id="password"
          />
        </div>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default App;