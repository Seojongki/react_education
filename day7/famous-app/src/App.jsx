import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [famous, setFamous] = useState([
    '절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다. - L론허바드',
    '그대 자신의 영혼을 탐구하라. 다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, -인디언 속담',
    '지구가 내일 망한다 하더라도 오늘 사과나무를 심자',
    '그래도 웃자',
  ]);
  const [currentFamous, setCurrentFamous] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandom(0, famous.length);
      setCurrentFamous(famous[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [famous]);

  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  //const [day, setDay] = useState(new Date().getDay());

  const week = ['일','월','화','수','목','금','토']
  let dayOfWeek = week[new Date().getDay()];


  return (
    <div className='App'>
      <h1>명언</h1>
      <div className='famous box'>
        <p>{currentFamous}</p>
      </div>
      <div className='day box'>{dayOfWeek}요일</div>
      <div className='date box'>{month+1} / {date}</div>
      <div><button>더보기</button></div>
    </div>
  );
}

export default App;