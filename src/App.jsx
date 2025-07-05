/*
    useEffect Hook: 

    - Used to perform side effects in function components.
    - side effects can include data fetching, subscriptions, or manually changing the DOM.
*/

import { useEffect, useState } from "react";

const App = () => {

  const [state, setState] = useState(0);

  // this runs after the component mounts and after every re-render
  // useEffect(() => {
  //   fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // });

  useEffect(() => {
    fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [state]);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setState(state + 1)}>Re-Render Component</button>
    </div>
  )
}

export default App;