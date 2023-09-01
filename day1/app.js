console.log("asdfasdf");

const titleEl = document.getElementById("title");
console.log(titleEl);

const _PI = Math.PI;
console.log(_PI);

const animals = ["dog", "cat"];
console.log(animals);
animals[0] = "bird";
console.log(animals);
// animals = 1; const는 상수로 선언된 자료형은 불변, 데이터값은 수정 가능

//템플릿 문자열  : {}   ``안에 사용할 수 있으며, 문자와 변수를 같이 쓸 수 있다.
const name = "john";
const age = 30;

//const greeting = "안녕하세요, 저는 " + name + "이고 나이는 " + age + "입니다";
const greeting = `안녕하세요~, 저는 ${name}이고 나이는 ${age}입니다`;
console.log(greeting);

//자바스크립트로 HTML 쓰기
const contentEl = document.getElementById("content");
const title = "CSS 이란?";

//다중문자열 - 여러줄 작성
const html = `
    <h1>${title}</h1>
    <p>UI를 동적으로 생성하고 컴포넌트화 시켜 개발할 수 있는 
    라이브러리/프레임워크 입니다.</p>
`;

contentEl.innerHTML = html;

//표현식 계산
const x = 3,
  y = 10;
let sum = `합계는  ${x + y}`;
console.log(sum);

//함수 선언
function add(a, b) {
  return a + b;
}

console.log(add(3, 5));

//multi(곱하기) 변수에 익명함수 저장, 변수 먼저 선언해야함 아래의 multi를 먼저 호출하면 에러남
const multi = function (a, b) {
  return a * b;
};
//변수나 함수를 먼저 선언하고 사용해야 함
console.log(multi(4, 5));

//Arrow function(화살표 함수)
const 인사 = (name) => {
  if (name == undefined) {
    return "이름이 없습니다.";
    //throw "이름 입력 안함"; //일부러 에러냈음
  } else {
    return `안녕하세요~ ${name}님`;
  }
};

console.log(인사("홍길동"));
console.log(인사());

//축약식, 한줄인 경우 (), {}, return까지 생략가능함
// const sayHello = inputName => `Hello ${inputName}`;
const sayHello = (inputName, age) => {
  return `Hello ${inputName} 나이는 ${age}`;
};

console.log(sayHello("둘리", 30));

const profile1 = (name1, age) => {
  return `${name1}의 나이는 ${age}입니다.`;
};

console.log(profile1("길동이", 25));

const pokemon = {
  name2: "피카츄",
  skill: "전기",
};

//let name2 = pokemon.name;
//let skill = pokemon.skill;
//분할 대입, 위에 각각의 변수에 입력할 것을 아래와 같이 대입할 수 있다.
const { name2, skill } = pokemon;

console.log(`${name2}는 ${skill} 스킬을 소유`);

//배열 분할 대입
let arr = [10, 20];
let a, b, rest;
// a = arr[0]
// b = arr[1];
// 위의 대입과 동일함
[a, b] = arr;
console.log(a, b);

// a, b를 제외한 나머지는 배열로 가져옴
let arr2 = [10, 20, 30, 40, 50];
[a, b, ...rest] = arr2;
console.log(a, b, rest);

//분할 대입
const student = {
  name3: "John Doe",
  age3: 20,
  grade: "A",
  major: "Computer Science",
};

const { name3, age3, ...rest2 } = student;
console.log(name3, age3, rest2);

//함수의 기본값(default parameter), 값이 입력되지 않았을 때 기본값 설정
const sayPokemon = (name = "홍길동") => {
  console.log(`${name}님 안녕~~`);
};

sayPokemon();

//연습문제
function square(s2 = 0) {
  //매개변수 값을 제곱하여 리턴
  return s2 * s2;
}

console.log(square()); //출력0
console.log(square(5)); //출력25
console.log(square(3)); //출력3

//배열 합치기
let myarr1 = [1, 2, 3];
//let myarr2 = myarr1.concat(합칠배열)
let myarr2 = myarr1.concat([4, 5, 6]);

console.log(myarr2);

//스프레드 연산자로 합치기
let myarr3 = [7, 8, 9];
//let myqrr4 = [10,11,12];
let myarr4 = [...myarr3, 10, 11, 12];
console.log(myarr4);

//변수 복사(대입), 각각의 변수는 메모리를 할당받는다
let x1 = 1;
let y1 = x1; //복사 (프리미티브 값)
y1 = 2;
console.log(x1, y1);

//배열 복사 (레퍼런스 값) - 원본 참조
let 원본배열 = [1, 2, 3];
let 카피배열 = 원본배열;
카피배열[0] = 99;
console.log(원본배열, 카피배열);

//주소를 카피해오는게 아니라 배열값 자체를 가져온다.
카피배열 = [...원본배열];
console.log(카피배열);
카피배열[0] = 11;
console.log(원본배열, 카피배열);

//연습문제 (스프레드를 이용하여 배열을 하나로 합쳐 출력하기)
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];
const mergedArray = [...arr5, ...arr6];

console.log(mergedArray);
