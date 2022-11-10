/**
 * @param number
 * return square
 */

function square(number) {
  return number * number;
}

let a = 10;
console.log(test(a));
function test(a) {
  return a * 10;
}
console.log(a);

/**
 * user object
 * if you pass a variable to the function
 * and function changes its value then it is only change its value inside of funtion
 * if we pass object to the function .
 * function change its then changes  will be applied outside of
 */
const user = {
  id: 1,
  firstname: "Sara",
  lastname: "Khan",
  address: {
    state: "sindh",
    city: "karachi",
    zip: "54000",
  },
};
function userData(userObj) {
  return (userObj.firstname = "Asia");
}
console.log(user.firstname); //Sara
console.log(userData(user)); //Asia
console.log(user.firstname); //Asia

const numberList = [45, 55, 65];
function changeArray(arr) {
  return (arr[0] = 30);
}
console.log(numberList[0]); //45
console.log(changeArray(numberList)); //30
console.log(numberList[0]); //30

//Arrow function or function expression
const cube = (number) => number * number * number;

console.log(cube(2)); //8

const factorial = function fac(number) {
  return number < 2 ? 1 : number * fac(number - 1);
};
console.log(factorial(4)); //8

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const fac = map(factorial, numbers);
console.log(fac);
const cubee = map(factorial, numbers);
console.log(cubee);

//eval()
let x = 10;
let y = 20;
console.log(eval("x+ y"));
