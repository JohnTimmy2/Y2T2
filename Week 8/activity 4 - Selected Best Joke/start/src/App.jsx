import React from "react";

import Joke from "./Joke";

export default function App() {
  const jokes = [
    {
      id: 1,
      text: "Why was the math book sad? Because it had too many problems",
    },
    {
      id: 2,
      text: "Why was the computer cold? Because it left its Windows open",
    },
    {
      id: 3,
      text: "Why did the banana go to the doctor? Because it wasn't peeling well!",
    },
  ];

  return (
    <div className="">
      <h1>Vietnamese Jokes</h1>

      {jokes.map((joke) => (
        <Joke key={joke.id} id={joke.id} text={joke.text} />
      ))}
    </div>
  );
}