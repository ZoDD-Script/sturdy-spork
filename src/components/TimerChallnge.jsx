import { useState } from "react"

export default function TimerChallenge({ title, targeTime }) {
  const [ timeStarted, setTimeStarted ] = useState(false)
  const [ timeExpired, setTimeExpired ] = useState(false)

  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true)
    }, targeTime * 1000)
    
    setTimeStarted(true)
  }

  function handleStop() {
    
  }

  return(
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targeTime} second{targeTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timeStarted ? 'stop' : 'start'} Challenge
        </button>
      </p>
      <p className={timeStarted ? 'active' : undefined}>
        {timeStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  )
}