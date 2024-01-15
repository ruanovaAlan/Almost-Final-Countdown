import { useState, useRef } from "react";

export default function Player() {
  const input = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleClick() {
    setEnteredName(input.current.value);
    input.current.value = ""; // clear input
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
