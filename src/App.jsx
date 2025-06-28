function Greeting() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is my First Component</p>
    </>
  )
}

function App() {
  return (
    <>
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  )
}

export default App;