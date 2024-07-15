import { useRef, useState } from "react"
import ResultModel from './ResultModel'

export default function TimerChallenge({ title, targeTime }) {
  const timer = useRef()
  const dialog = useRef()

  const [ timeRemaining, setTimeRemaining ] = useState(targeTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targeTime * 1000

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    setTimeRemaining(targeTime+ 1000)
    dialog.current.open()
  }
  
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10)
  }

  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current)
    // setTimeStarted(false)
  }

  return(
    <>
      <ResultModel ref={dialog} targetTime={targeTime} result='lost' />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targeTime} second{targeTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'stop' : 'start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}