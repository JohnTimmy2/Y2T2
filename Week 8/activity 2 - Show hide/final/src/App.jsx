import React from "react";

// don't change the Component name "App"
export default function App() {
  const [dialogVisible, setDialogVisible] = React.useState(false);

  return (
    <div>
      {dialogVisible && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={(e) => setDialogVisible(false)}>Proceed</button>
        </div>
      )}

      {!dialogVisible && (
        <button onClick={(e) => setDialogVisible(true)}>Delete</button>
      )}
    </div>
  );
}