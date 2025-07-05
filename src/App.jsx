function App() {
  let count = 0;

  const handleIncrease = (args) => {
    count = count + 1;
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