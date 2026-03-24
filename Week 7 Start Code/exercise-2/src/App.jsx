import React, { useState } from "react";

function App() {

  const [text, setText] = useState("");


  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input value={text} onChange={handleChange} />

      <p>
        <label>Here is the text in upper case</label>
        {/* Display the text entered in uppercase */}
        <input value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
