import { useState } from 'react'
import './App.css'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';


function App() {


  const [dark, setDark] = useState(false);


  return (
    // 클래스를 3항 연산자로 처리
    <div className= { dark ? "App darkmode" : "App" } >
      <header>
        <h1>Dark mode App</h1>
        <button
          onClick={() => setDark(!dark)}
        >
          {dark == true? <MdDarkMode/>: <MdOutlineDarkMode/>}
          </button>
      </header>
      <main >
        <h2>Dark mode is...</h2>
        <p >국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.</p>
      </main>
    </div>
    
  )
}

export default App
