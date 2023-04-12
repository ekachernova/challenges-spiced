import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First button</Button>
      <Button>Second button</Button>
      <Button>Third button</Button>
      <Button>Fourth button</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
