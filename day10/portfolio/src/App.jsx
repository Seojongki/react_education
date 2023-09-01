import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Header from './components/Header'


function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState([]);
  const [searchOption, setSearchOption] = useState('all');
  const handleDarkMode = () => {
    setDark(!dark);
  }

  const handleSearchOption = (name) => {
    setSearchOption(name);
    console.log(name)
  }
  
  useEffect(() => {
    // 국가코드별: https://restcountries.com/v3.1/alpha/fr
    fetch(`https://restcountries.com/v3.1/${searchOption}`)
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          alert('찾는 데이터가 없습니다!');
          throw new Error(`${res.status} 에러`);
        }
      })
      .then(data => {setData(data)})
      .catch(err => console.log(err.message))
  }, [searchOption])
  console.log(data);

  return (
    <div className={dark ? "App darkmode" : "App"}>
      <Header handleDarkMode={handleDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={<Home data={data} 
            handleSearchOption={handleSearchOption} 
          />} />
          <Route 
            path='/detail/:id' 
            element={<Detail data={data}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
