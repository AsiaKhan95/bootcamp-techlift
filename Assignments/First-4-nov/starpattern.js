let patternEle = document.getElementById("pattern");

// *
// **
// ***
// ****
// *****
function pattern1() {
  console.clear();
  console.log("pattern 1");
  let patternlenth = 5;
  let str = "";
  for (let outer = 1; outer <= patternlenth; outer++) {
    for (let inner = outer; inner <= outer; inner++) {
      str += "*";
    }
    console.log(str);
    patternEle.innerHTML += str;
    patternEle.innerHTML += "<br/>";
  }
}

function pattern2() {}
function pattern3() {}
function pattern4() {}
function pattern5() {}
function pattern6() {}
function pattern7() {}
function pattern8() {}
function pattern9() {}
