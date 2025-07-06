import { useEffect, useRef, useState } from "react";

const App = () => {

  let count = 0;
  let [refresh, setRefresh] = useState(1);
  let countRef = useRef(0);

  const handleIncrease = () => {
    count = count + 1;
    console.log('Count increased:', count);
  }

  const handleRefIncrease = () => {
    countRef.current = countRef.current + 1;
    console.log('Count Ref increased:', countRef.current);
  }

  useEffect(() => {
    console.log('Component Rendered:', refresh);
  });

  return (
    <div>
      <button onClick={() => setRefresh(refresh + 1)}>Refresh Component {refresh}</button>
      <h1>Variable Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <h1>Use Ref Counter: {count}</h1>
      <button onClick={handleRefIncrease}>Increase</button>
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