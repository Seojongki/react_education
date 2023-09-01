import React from 'react'
import { Link } from 'react-router-dom'



function Header(props) {

  const {handleDarkMode} = props;

  return (
    
      <nav className='header'>
      <h2><a href="/">home</a></h2>
      <button
        onClick={handleDarkMode}
      >dark mode</button>
    </nav>
    
    
  )

  
}

export default Header