/*
    useEffect Hook: 

    - Used to perform side effects in function components.
    - side effects can include data fetching, subscriptions, or manually changing the DOM.
*/

import { useEffect, useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
      .then(response => response.json())
      .then(data => setTodos(data))
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos.map(todo => {
            return <li key={todo.id}>{todo.content}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default App;

/*
  Component -> UI/HTML Elements + JS Logic

               |
              Products Data -> via data fetching (API) -> set the data to the state -> component re-renders -> latest data is displayed
*/