import { useState } from "react";

/*
  State -> 
  
  - State is a value that can change over time. 
  - State is used to store data that can be changed by the user or by the application.


  - Add a button to decrease the count
  - Add a button to reset the count to 0
*/
function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button> <button onClick={handleDecrease}>Decrease</button> <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App;