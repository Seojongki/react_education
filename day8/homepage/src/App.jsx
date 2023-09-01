import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//연결할 페이지들 다 불러오기
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

function App() {


  return (
    <BrowserRouter>      
      <Nav />
      <Routes>
        {/*<Route path='경로명' element={컴포넌트명} />*/}
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
