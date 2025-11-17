import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter == 20) {
      return;
    }
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter == 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter = {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
