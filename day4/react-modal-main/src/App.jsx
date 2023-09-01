import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'

function App() {

  //modal = true(창열림) | false(창닫힘)
  const [modal, setModal] = useState(false);

  
  return (
    <>
      <h1>App</h1>
      {
        //조건?처리문1(참):처리문2(거짓) ==> 삼항연산자 / if문은 사용못함
        //아래의 setModal={setModal}는 자식에게 props로 부모의 함수를 전달
        // 일종의 callback 함수와 같음
        modal? <Modal setModal={setModal}/> : null
      }

      
      <button 
        onClick={() => {setModal(true)}
        }>
        모달창 열기</button>
    </>
  )
}

export default App
