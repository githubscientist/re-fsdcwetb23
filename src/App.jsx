// Controlled Form or Component in React
// Because the value of the input is controlled by React state

import { useState } from "react";
const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log(email, password);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="password..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default App;