// 모듈 만들기 : 단축키 =>  rfc : react function component

import myStyle from './CSSModule.module.css'

function CSSModule() {
  return (
    <div>
        <div>CSSModule</div>
        <p className={ myStyle.textRed }>글자가 red</p>
    </div>
    
  )
}

export default CSSModule