import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
      <p>The next day!</p>
      <p>Time to go!</p>
      <p>Hallo</p>
      <p>Hallo Uschi</p>
      <p>Hallo Wolfgang
        
      </p>
    </div>
  );
}

root.render(<App />);
