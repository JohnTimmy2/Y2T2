import React from "react";

export default function App() {
  const [selected, setSelected] = React.useState(false);

  function handleToogle() {
    setSelected(!selected);
  }

  function getTextClass() {
    return selected ? "active" : "";
  }
  return (
    <div>
      <p className={getTextClass()}>Style me!</p>
      <button onClick={handleToogle}>Toggle style</button>
    </div>
  );
}