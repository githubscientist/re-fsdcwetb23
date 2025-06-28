import Greeting from "./components/Greeting";

// parent component to Greeting
function App() {

  // create a carrier: callback function
  function dataFromChild(name, email) {
    console.log(name, email);
  }

  return (
    <>
      <Greeting
        dataFromChild={dataFromChild}
      />
    </>
  )
}

export default App;