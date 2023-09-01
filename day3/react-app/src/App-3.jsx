import React from 'react'
import './App.css'
import ColorButton from './components/ColorButton'
import Foods from './components/Foods'


function App() {
  return (
    <>
      <h1>App2</h1>
      <p>------------------------- </p>
      <ColorButton bg_color='red' color='white' text='구매하기'/>
      <ColorButton bg_color='blue' color='white' >쇼핑하기</ColorButton>
      <ColorButton bg_color='green' color='white'>장바구니</ColorButton>

      <Foods>
        <li>김밥</li>
        <li>만두</li>
        <li>라면</li>
      </Foods>
    </>
  )
}

export default App