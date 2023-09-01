
//id로 문서객체 선택
const titleId = document.getElementById('title');
console.log(titleId);

//class로 문서객체 선택(가져오기)
const containers = document.getElementsByClassName('container');
console.log(containers);

//querySelector(css 선택자)  CSS 방식
const titleEl = document.querySelector('#title');
console.log(titleEl);

//querySelector로 하나의 클래스만 선택 (여러개가 있다면 첫번째것만 선택됨)
const containerEl = document.querySelector('.container');
console.log(containerEl);

//여러개 선택(배열) / NodeList로 반환함
const containersEl = document.querySelectorAll('.container');
//배열 번호로 조회 가능
console.log(containersEl);
console.log(containersEl[1]);


//DOM 생성
// createElement('요소명') -- 요소 생성
//const divEl = document.createElement('div');
//console.log("divEl====>",divEl);


//p태그 생성
const pEl = document.createElement('p');
//태그에 텍스트 입력
pEl.innerText = "p태그 입니다.";
console.log(pEl);

//div 안에 p 추가  - appendChild(요소명);
divEl.appendChild(pEl);
console.log(divEl);

//prepend -- 앞에 추가
const h2El = document.createElement('h2'); //제목 태그 생성
h2El.innerText = "생성된 제목";

//text content 변경(값)
//h2El.textContent = "변경된 제목";

//divEl.prepend(h2El); //앞에 생성
//divEl.append(h2El); // 뒤에 생성
//divEl.appendChild(h2El);

console.log(divEl);


// HTML .container에 append
containersEl[1].append(divEl);

//버튼요소 추가
const btnEl = document.createElement('button');

//버튼 이름 추가
btnEl.textContent = '버튼';
console.log(btnEl);
containersEl[0].append(btnEl);

//버튼에 이벤트 추가
btnEl.addEventListener('click', () => {
    //클릭하면 함수 실행
    //container 2 안의 h2 삭제
    //containersEl[1].appendChild(h2El);
    containersEl[1].removeChild(h2El);
    



    //영역 2 내의 콘텐츠 삭제하기


});










































































