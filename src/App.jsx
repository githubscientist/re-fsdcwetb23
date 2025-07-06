import { useEffect, useState } from "react";

// API URL: https://685ac3af9f6ef9611157b188.mockapi.io/todos
const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index}>{todo.content}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App;