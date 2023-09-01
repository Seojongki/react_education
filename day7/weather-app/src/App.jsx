import { useState } from 'react'
import './App.css'

function App() {
  
  const [location, setLocation] = useState(''); // 위치 검색어 변수
  const [weather, setWeather] = useState(null); // 날씨 데이터를 null로 명시적 표시
  
  
  const fetchWeather = () => {
    const apiKey = '140ed7347202d914e5eac8f72e07b1aa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Seoul'}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())  //json 포맷으로 변환
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <button onClick={fetchWeather}>날씨정보 가져오기</button>
    </div>
  )
}

export default App
