import {name, sayName, add} from "./myModule";

//컴포넌트
function App(){



    let userInfo = {
        name:"둘리",
        address: "쌍문동"
    }


    return(
        <>
            <h1>App4</h1>
            <p>{`${userInfo.name}는 ${userInfo.address}에 살아요~`}</p>
            <p>{`${name}님 안녕하세요~`}</p>
            <p>{`안녕~  ${sayName("둘리")}야~`}</p>
            <p>{`3+5 두수의 합은 ${add(3,5)}`}</p>
        </>
      
    )
}

export default App;