import React from 'react'

function Modal(props) {


    console.log(props)
    //자식은 부모의 함수를 실행시킬수 없음
    //부모로 부터 함수를 전달받아와서 실행한다.
    //setModal을 받아오지 않으면 실행시킬수 없다.    
    const setModal = props.setModal;
        

  return (
    <div className="modal">
        <div className="modal-content">
            <h2>Modal</h2>
            <p>모달창입니다.</p>
        </div>
        <button 
        onClick={() =>{setModal(false)}}
        >닫기</button>
    </div>
  )
}

export default Modal