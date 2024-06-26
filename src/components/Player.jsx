import { useState } from "react";

export default function Player() {
  const [ playerName, setPlayerName] = useState(null)
  const [ submitted, setSubmitted ] = useState()

  function handleChage(event){
    setSubmitted(false)
    setPlayerName(event.target.value)
  }

  function handleClick() {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChage} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
