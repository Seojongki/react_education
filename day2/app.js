//함수 표현식(Arrow)
let log = (msg) => {
  console.log(msg);
};

log("hello");

//함수에 객체 넣기
const car = {
  name: "차종은 소나타입니다.",
  msg: (name) => {
    console.log(name);
  },
};

car.msg(car.name);

//함수에 함수를 전달, callback 함수, 함수에서 함수를 호출
const 요리 = (재료) => {
  return 재료();
};

const 재료 = () => {
  return "피자";
};

console.log(요리(재료));

setTimeout(function () {
  console.log("2초 경과");
}, 2000);

//숫자 배열에서 짝수만 필터링하는 함수
const 짝수만 = (numbers) => {
  let result = numbers.filter((num) => {
    return num % 2 === 0;
  });
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const 짝수 = 짝수만(numbers);
console.log(짝수);

//비동기 처리
function placeOrder(menu, callback) {
  let order;

  //주문처리(시간경과)
  setTimeout(function () {
    order = `주문완료: ${menu}`;
    //결과 함수
    callback(order);
  }, 2000);
  // return order; // 주문결과 : 2초가 경과하기 전에 결과를 반환함으로 undefind이 나온다.
}

function 주문(order) {
  console.log(order);
}

console.log(placeOrder("햄버거", 주문));

//음식주문 v2(promis 문법), 비동기
function foodOrder(food) {
  return new Promise((해결, 실패) => {
    //비동기 처리문
    setTimeout(() => {
      //const 주문성공 = false; //응답메시지
      const 주문상태 = 2; //응답메시지
      if (주문상태 == 1) {
        해결("주문완료!");
      } else if (주문상태 == 2) {
        해결("주문 처리중!");
      } else {
        실패("주문실패!");
      }
    }, 1000);
  });
}

foodOrder("햄버거")
  .then((결과) => console.log(결과)) //성공
  .catch((실패) => console.log(실패)); //실패

//연습문제
//1. 상품 데이터를 가지고 있는 API
function searchProduct(keyword) {
  return new Promise((resolve, reject) => {
    //서버 API 요청을
    setTimeout(() => {
      const products = ["Apple", "Banana", "Orange"];

      const filteredProducts = products.filter((product) =>
        product.toLowerCase().includes(keyword.toLowerCase())
      );
      console.log("결과값 : ", filteredProducts);

      if (filteredProducts.length > 0) {
        resolve(filteredProducts);
      } else {
        reject("검색 결과가 없습니다.");
      }
    }, 3000);
  });
}

searchProduct((keyword = "orange3"))
  .then((products) => {
    console.log(`검색어 "${keyword}"로 검색된 상품:`);
    console.log(products);
  })
  .catch((error) => {
    console.error("상품 검색 중 오류 발생: ", error);
  });
