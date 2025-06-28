import Greeting from "./components/Greeting";

// parent component to Greeting
function App() {

  const loggedInUser = 'Sathish';

  return (
    <>
      <Greeting loggedInUser={loggedInUser} />
    </>
  )
}

export default App;