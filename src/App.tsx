import { useState } from 'react'
import Tacometer from './components/Tacometer/Tacometer'
import './App.css'

function App() {
  const [rpm, setRpm] = useState(0);
  const [redlineVal, setRedlineVal] = useState(8000);

  const handleChange = (e) => {
    setRpm(Number(e.target.value));
  };

  return (
    <>
      <Tacometer redline={redlineVal} needleAngle={rpm}/>
      <input type="range" id="rpmInput" min="-90" max={90} onChange={handleChange}/>
    </>
  )
}

export default App
