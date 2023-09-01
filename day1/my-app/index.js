console.log("hello~~");

// date-fns 모듈을 추가. format 함수를 사용
const { format } = require("date-fns");
const d = new Date();
console.log(d);

const year = d.getFullYear();
const month = d.getMonth();
const date = d.getDate();

console.log(year, month + 1, date);

const formateD = format(d, "yyyy-MM-dd");
console.log(formateD);
