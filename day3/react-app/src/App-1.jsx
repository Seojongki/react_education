import {React, useState} from 'react'
import './App.css'



function App() {


  //열림 true, 닫힘 false
  const [modal, setModal] = useState(false); //기본값(닫힘)
  console.log(modal);
  
  
  return (
    <>
      <h1>App3</h1>

    { modal ? (

        <div className='modal'>
        <h2>모달창</h2>
        <p>모달창입니다.</p>
        <button className='btn' onClick={() => {setModal(false)}} >닫기</button>
        </div>

      ) : null
    }



      
      <button onClick={() => {setModal(true)}}>모달창열기</button>
    </>
  )
}

export default App