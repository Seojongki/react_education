import { useState } from 'react'
import './App.css'


function App() {
  
  const [data, setData] = useState();
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json);
      })    
  }

  console.log("==========",data);


  return (
    <>
      <h1>App</h1>
      <button onClick={fetchData}>data가져오기</button>
      <div className='App'>
        <ul>
          {
            data? data.map((photo) => {
              return(
                <li key={photo.id}>
                  <p>{photo.id}: {photo.title}</p>
                  <p>
                    <img src={photo.thumbnailUrl} alt="" />
                    
                  </p>
                </li>
              )
            }) : null
          }
        </ul>
      </div>
    </>
  )
}

export default App
