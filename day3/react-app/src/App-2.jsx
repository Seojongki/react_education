import './App.css'
import Header from './components/Header';
import CSSModule from './components/CSSModule';

function App() {
  
  const name = "둘리";

  const userInfo = {
    name: '홍길동',
    age : 30,
  }

  //클릭시 실행되는 함수
  const sayHello = () => {
    alert(`안녕 ${name}`);
  }

  //스타일
  const style = {
    color: 'blue',
    backgroundColor: 'yellow',
    textDecoration : 'underline',
    border: '1px solid',
    padding: '10px'
  }


  //스타일(버튼)
  const btn ={
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',   
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '17px',
    fontWeight:'bold',
  }


  return (
    <>
      <CSSModule />
      <Header />
      <h1 >App</h1>
      <p style={ style }>{name}</p>
      <p>{`이름은 ${userInfo.name}이고 나이는 ${userInfo.age}입니다.`}</p>
      <button style={ btn } onClick={sayHello}>버튼이벤트</button>
    </>
  )
}

export default App
