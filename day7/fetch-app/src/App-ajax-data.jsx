import { useState } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState();
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json);
      })    
  }

  console.log(data);


  return (
    <>
      <h1>App</h1>
      <button onClick={fetchData}>data가져오기</button>
      <ul>
        {
          data ? data.map(post =>{
            return(
              <li key={post.id}>
                <p>{post.id} : {post.title}</p>
                <p style={{
                    'border':'1px solid #ccc', 
                    'padding' : '1rem'
                }}>{post.body}</p>
              </li>
            )            
          }) : null
        }
      </ul>
    </>
  )
}

export default App
