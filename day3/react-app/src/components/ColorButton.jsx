import React from 'react'

function ColorButton(props) {

    //props 확인
    console.log(props);

    //분할대입
    const {bg_color, color, children, text} = props;
    const style = {
        backgroundColor: bg_color,
        padding: '5px',
        border: 'none',
        color: color,
    }

  return (
    <button
        style ={style} 
    >{children}{text}</button>
  )
}

export default ColorButton