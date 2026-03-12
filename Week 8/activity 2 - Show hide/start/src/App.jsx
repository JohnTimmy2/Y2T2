import React from "react";

// Conditionally show a warning dialog once a user has clicked DELETE button.
// Inside that dialog, dismiss the warning (i.e., remove the warning box from the screen) once a user has clicked PROCEED button
export default function App() {
  return (
    <div>
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button>Proceed</button>
      </div>

      <button>Delete</button>
    </div>
  );
}