import { useMemo, useState } from "react";

const App = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [render, setRender] = useState(0);

  let totalSum = useMemo(() => {
    return numbers.reduce((acc, num) => {
      console.log('Calculating sum...');
      return acc + num;
    })
  }, [numbers]);

  // let totalSum = numbers.reduce((acc, num) => {
  //   console.log('Calculating sum...');
  //   return acc + num;
  // });

  return (
    <div>
      <h1>Sum of Numbers: {totalSum}</h1>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Add Next Number</button>
      &nbsp;<button onClick={() => setRender(render + 1)}>Re-Render</button>
    </div>
  )
}

export default App;