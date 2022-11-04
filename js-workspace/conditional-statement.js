let result = document.getElementById("result");
function ageChecker() {
  let age = prompt("Enter your age");
  if (age >= 18) {
    console.log("you are eligible for getting driving license");
    result.innerHTML = "<b>you are eligible for getting driving license</b>";
    result.style.color = "green";
  } else {
    result.innerHTML =
      "<b>you are  noteligible for getting driving license</b>";
    result.style.color = "red";
  }
}

//even odd checker - if else demo

function evenOddChecker() {
  let num = prompt("Enter a number");
  try {
    if (num % 2 == 0) {
      result.innerHTML = "<b>Number is Even</b>";
      result.style.fontSize = "18px";
      // document.write("number is even");
    } else {
      result.innerHTML = "<b>you anumber is odd.</b>";
      result.style.fontSize = "18px";
      // document.write("number is odd");
    }
  } catch (e) {
    document.write(e.message);
  }
}

//enrolled course - if else if demo
function enrolledCourse() {
  let course = prompt("Enter you course name");
  if (course === "javascript") {
    result.innerHTML = "<b>you are enrolled in javascript course.</b>";
  } else if (course === "database") {
    result.innerHTML = "<b>you are enrolled in database course.</b>";
  } else if (course === ".net") {
    result.innerHTML = "<b>you are enrolled in dotnet course.</b>";
  } else {
    result.innerHTML = "<b>yor are not enrolled in  any course.</b>";
  }
}

//switch demo grade checker
function gradeChecker() {
  let grade = prompt("Enter your grade");
  switch (grade) {
    case "A":
      result.innerHTML = "<b>Congrats! Passed  Excelent</b>";
      result.style.color = "green";
      break;
    case "B":
      result.innerHTML = "<b>Passed Good</b>";
      result.style.color = "green";
      break;
    case "C":
      result.innerHTML = "<b>Passed you need more practice</b>";
      result.style.color = "red";
      break;
    case "D":
      result.innerHTML = "<b>Faild try again</b>";
      result.style.color = "red";
      break;
    default:
      result.innerHTML = "<b>Please enter write grade</b>";
  }
}

function calculate() {
  let oprend1 = 2;
  let oprend2 = 2;
  let operator = "+";
  let result = null;
  switch (operator) {
    case "+":
      result = add(oprend1, oprend2);
      break;
    case "-":
      result = subtract(oprend1, oprend2);
      break;
    case "*":
      result = multiply(oprend1, oprend2);
      break;
    case "/":
      result = divide(oprend1, oprend2);
      break;
    case "%":
      result = modulus(oprend1, oprend2);
      break;
    default:
      console.log("invalid operator");
  }
  console.log(`result : ${result}`);
}
//add()
function add(a, b) {
  return a + b;
}
//subtract()
function subtract(a, b) {
  return a - b;
}
//multiply()
function multiply(a, b) {
  return a * b;
}
//divide()
function divide(a, b) {
  return a / b;
}
//modulus()
function modulus(a, b) {
  return a % b;
}
