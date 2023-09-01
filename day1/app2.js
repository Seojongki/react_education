const foods = ["김밥", "만두", "순대"];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

//함수형 문법(for문) , 반복 + 값을 변경할 수 있음, 원본 값은 참조만 한다., 리턴값은 배열로 나간다
foods.map(function (값) {
  console.log(값);
});
//반복문
let newFoods = foods.map(function (값) {
  //console.log(값);
  return 값;
});

console.log(newFoods);

//반복문 + 값을 변경
let newFoods2 = foods.map(function (값) {
  //console.log(값);
  return "새로운" + 값;
});

console.log(newFoods2);

//filter() - 일치하는 자료 가져오기
let likeFood = foods.filter((food, i) => {
  // 조건에 일치하는 값 반환
  console.log(`${i}: ${food}`);
  return food === "만두";
});
console.log("filter: ", likeFood);

//연습문제 : map() 함수로 names 배열의각 이름에 '님'자가 추가되도록 하시오
const names = ["둘리", "길동", "짱구"];
//let name5 = names.map(function (name5) {
//   return name5 + "님";
// });
let name5 = names.map((name5) => name5 + "님");
console.log(name5);

//객체 반환하기 (사용자가 요청한 변수들로 객체를생성하는 함수)
function creatPerson(name, age) {
  return {
    // 객체 안에 들어간 반수 : property(속성) -> value(값)
    name, // name: name  ; 앞의 name은 함수내의 변수 뒤의 name은 전달받은 값
    age, // age: age
    greet: function () {
      //객체 안의 함수는 메소드라 한다.
      console.log("Hello, " + this.name);
    },
  };
}

const person1 = creatPerson("둘리", 60);
console.log(person1);
person1.greet(); // 위의 객체의  creatPerson 안의 greet 함수(메소드)를 실행할 수 있다
