import React from "react";
function App() {
  const [stateCount, setStateCount] = React.useState(0);
  let localCount = 0;

  const incrementCount = () => {
    // We increment  both the state and the local count
    setStateCount(stateCount + 1);
    localCount++;

    // Log the 2 counters
    console.log("state count= " + stateCount + " local count=" + localCount);
  };

  return (
    <>
      <main>
        <h1>{stateCount}</h1>
        <button onClick={incrementCount}>Increment Count</button>
      </main>
    </>
  );
}

export default App;

// Run this code - Look at the console logs:
//  Q1:   Why the state count start at 0 ad not at 1 on the first log 1?
//  Q2:   Why the local count is allays 1?
//
// LOGS :
// state count= 0 local count=1
// state count= 1 local count=1
// state count= 2 local count=1
// state count= 3 local count=1
// state count= 4 local count=1
// state count= 5 local count=1