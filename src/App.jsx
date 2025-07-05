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

  const handleIncrease = (args) => {
    setCount(count + 1);
    console.log('Count increased:', count);
    console.log('Arguments:', args);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => handleIncrease('hello')}>Increase</button>
    </>
  )
}

export default App;