import { useCallback, useMemo, useState } from "react";

const App = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [render, setRender] = useState(0);

  // useCallback is used to memoize the function so that it does not get recreated on every render
  let calculateSum = useCallback(() => numbers.reduce((acc, num) => acc + num), [numbers]);

  // useMemo is used to memoize the result of the calculation so that it does not get recalculated on every render
  let totalSum = useMemo(calculateSum, [numbers]);

  return (
    <div>
      <h1>Sum of Numbers: {totalSum}</h1>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Add Next Number</button>
      &nbsp;<button onClick={() => setRender(render + 1)}>Re-Render</button>
    </div>
  )
}

export default App;