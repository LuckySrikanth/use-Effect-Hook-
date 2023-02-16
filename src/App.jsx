import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [stop, setToStop] = useState(false)


  useEffect(() => {

    
    let timerID;

    console.log(timer)
    if (stop) {
       timerID = setInterval(() => {
        console.log("rendering")
        setTimer(prevState => prevState + 1) ;
      },1000)

    }
    else if(!stop && timer !==0) {
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);

  },[stop])

  const start = () => {
    setToStop(true)
  }

  const StopTimer = () => {
    setToStop(false)
  }

   return (
    <div className="App">
      <h1 className='timer'>Timer</h1>
      <h1 className='time'>{timer}</h1>
      <button onClick={start}>Start</button>
      <button onClick={StopTimer}>Stop</button>
      <button onClick={SetToZero}>Set To Zero</button>
    </div>
  )
}

export default App
