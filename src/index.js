import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
      <p>The next day!</p>
    </div>
  );
}

root.render(<App />);
