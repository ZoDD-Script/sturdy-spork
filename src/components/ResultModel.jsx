import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModel = forwardRef(function ResultModel({ result, targetTime }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return(
    <dialog ref={dialog} className="result-modal" >
      <h2>Your {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped your timer with <strong>X seconds left.</strong></p>
      <form action="" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModel;