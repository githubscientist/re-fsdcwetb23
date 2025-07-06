import { useEffect, useState } from "react";

const App = () => {

  let count = 0;
  let [refresh, setRefresh] = useState(1);

  const handleIncrease = () => {
    count = count + 1;
    console.log('Count increased:', count);
  }

  useEffect(() => {
    console.log('Component Rendered:', refresh);
  });

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button> <button onClick={() => setRefresh(refresh + 1)}>Refresh Component {refresh}</button>
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