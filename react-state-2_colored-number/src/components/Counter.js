import ColoredNumber from "./ColoredNumber";

import { useState } from "react";

export default function Counter() {
  const [count,setCounter] = useState(0);
  function useMinus() {
    setCounter(count - 1);
  }

  function usePlus() {
    setCounter(count + 1)
  }
  
  return (
    <div className="counter">
 
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick = {usePlus}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick = {useMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}
