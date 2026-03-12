import React from "react";

// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element
// The class should be applied when the <button> is clicked, then removed, then applied gain etc.
export default function App() {
  return (
    <div>
      <p>Style me!</p>
      <button>Toggle style</button>
    </div>
  );
}
