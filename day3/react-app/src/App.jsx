import React from 'react'
import './App.css'
import logo from './assets/react.svg'
import Pokemons from './components/Pokemons'



function App() {
  return (
    <>
      <section className='title-bg'>
        <h1>App</h1>
        <img 
          style={{width: '30%'}}
          src={ logo }></img>        
      </section>
      {/* 포케몬 리스트 */}
      <Pokemons />
    </>
  )
}

export default App