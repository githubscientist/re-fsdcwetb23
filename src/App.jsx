import Greeting from "./components/Greeting";

// parent component to Greeting
function App() {

  const name = 'sathish';
  const email = 'sathish@guvi.in';

  return (
    <>
      <Greeting name={name} email={email} />
    </>
  )
}

export default App;