import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [bgColor, setBgColor] = useState('gray');
    
  return (
    <>
      <h1>App</h1>
      <div className="box" style={ {background: bgColor} } >box</div>
      <div className="btn-group2">
        <button onClick={() => setBgColor('red')}>red</button>
        <button onClick={() => setBgColor('green')}>green</button>
        <button onClick={() => setBgColor('blue')}>blue</button>
      </div>
    </>
  )
}

export default App
