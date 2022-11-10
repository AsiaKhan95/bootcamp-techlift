let num1 = 13; // numeric type
let num2 = "11"; //string type
let title; //declare but not set it value it contains undefine
console.log(title + num2);
console.log(title);

//greetUser
function greetUser() {
  let username = prompt();
  console.log(username);
  if (username != "") {
    showModal(username);
  }
}
//print printHeaderText
function printHeaderText() {
  let headerText = document.getElementById("header");
  headerText.innerHTML = "<h1>Javascript!</h1>";
  console.log(headerText);
}
//changeSliderImage
function changeSliderImage() {
  //alert("jjj");
  document.getElementById("slide-img").src = "images/cat2.jpg";
}
//changeSliderImage
function resetSliderImage() {
  //alert("jjj");
  document.getElementById("slide-img").src = "images/cat.jpg";
}
//showModal
function showModal(username = "not none") {
  let modal = document.getElementById("modal");
  let usernameEle = document.getElementById("username");
  usernameEle.innerText = username;
  modal.style.display = "block";
  let cards = document.getElementsByClassName("card");
  for (card of cards) {
    card.style.background = "#82DDF0";
    card.style.width = "500px";
  }
}
//closeModel
function closeModel() {
  //modal
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
