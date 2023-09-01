import { useState } from 'react'
import './App.css'

function App() {

  
  const [likes, setLikes] = useState([0,1,2]);
  const btnLike = (i) => {
    console.log(i);

    // 원본 배열에 직접 접근을 허용하지 않음
    // 그래서 복사본을 만들어 그걸 수정하고
    // 수정한 값을 원본에 대입함
    //배열이나 객체는 바로 변경이 어렵다
    //그래서 원본을 복사해서 복사본을 변경함
    //setLikes(likes[i]+=1) <-- 이렇게 원본에 접근은 불가능
    //key를 쓰는 이유는 버튼의 고유값을 확인하기 위함임
    //key값이 없다면 루프를 돌때 어떤 버튼인지 알기 어려움

    let copy = [...likes]; //원본을 복사
    copy[i] += 1; //카피본의 클릭한 버튼의 번호 증가
    setLikes(copy) //카피본을 원본에 대입    
  }

  

  return (
    <>
      <h1>App</h1>

      {
        likes.map((like,i) =>{
          return(
            <div key={i}>
              <button 
                onClick={() =>btnLike(i)}
              >좋아요</button>
              <span>{like}</span>
            </div>
          )
        })
      }
      
    </>
  )
}

export default App
