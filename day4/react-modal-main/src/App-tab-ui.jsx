import { useState } from 'react'
import './App.css'

function App() {

  const [tab, setTab] = useState(0);

    
  return (
    <>
      <h1>App</h1>
      <div className="tab-ui">
        <div className="tab-group">
          <a
            style={tab===0 ? {color:'red', background:'black'} : null} 
            href="#tab1" 
            onClick={()=>setTab(0)}>HTML</a>
          <a
            style={tab===1 ? {color:'red', background:'black'} : null}  
            href="#tab2" onClick={()=>setTab(1)}>CSS</a>
          <a 
            style={tab===2 ? {color:'red', background:'black'} : null} 
            href="#tab3" onClick={()=>setTab(2)}>JavaScript</a>
        </div>
        <div className="tab-contents">
          
          {
            tab === 0 && 
              <article id="tab1">
              <h1>HTML</h1>
              <p>Hyper Text Markup Language</p>
              </article>                        
          }

          {
            tab === 1 && 
              <article id='tab2'>
              <h1>CSS</h1>
              <p>Cascading Style Sheet</p>
              </article>
          }

          {
            tab ===2 &&
              <article id='tab3'>
              <h1>JavaScript</h1>
              <p>Web Programing Language</p>
              </article>
          }


        </div>
      </div>      
    </>
  )
}

export default App
