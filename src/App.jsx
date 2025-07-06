import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;

/*
  State -> count

  1. Component Rendered
  2. Button Clicked (when clicked) -> Triggers setCount -> Update the state count by increasing it by 1 -> state change causes re-render
  3. Component Rendered again with updated state
*/