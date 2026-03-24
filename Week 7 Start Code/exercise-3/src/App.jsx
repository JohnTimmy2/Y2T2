import React, { useState } from "react";

function App() {

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function onCompute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("A and B shall be numbers !");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} />

      <label>B =</label>
      <input onChange={onB} />

      <label>A + B =</label>
      <input
        disabled
        value={result}
        style={{ color: isError ? "red" : "black" }}
      />

      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
