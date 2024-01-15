import { useState } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false);
    setEnteredName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={enteredName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
