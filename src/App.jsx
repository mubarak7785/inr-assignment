import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Generateticket } from './components/Generateticket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Generateticket/>
    </div>
  )
}

export default App
