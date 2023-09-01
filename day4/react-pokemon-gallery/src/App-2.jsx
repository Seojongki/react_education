import { useState } from 'react'
import './App.css'

function App() {

  
  

  const data = [
    {
      name:'이상해씨',
      type: '풀, 독',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png',
    },
    {
      name:'파이리',
      type:'불꽃',
      imgUrl:'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png'
    },
    {
      name:'피카츄',
      type:'전기',
      imgUrl:'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png'
    }
  ]


  const [pnum, setPnum] = useState(0);
  

  return (
    <>
     <h1>Pokemon Gallery</h1>
     
     <div className="gallery">
        <div className="poke-img">
          <img src={data[pnum].imgUrl} alt="포케몬 이미지" />
        </div>        
        <div className="info">
          <p className="name">{data[pnum].name}</p>
          <p className="type">타입: {data[pnum].type}</p>
        </div>
     </div>

    <div className="btn">
      <button 
        onClick={() => {setPnum(0)}}
      >{data[0].name}</button>
      <button
        onClick={() => {setPnum(1)}}
      >{data[1].name}</button>
      <button
        onClick={() => {setPnum(2)}}
      >{data[2].name}</button>
    </div>
     
    </>
  )
}

export default App
