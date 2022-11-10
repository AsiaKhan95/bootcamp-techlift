//1.arrow functions
const square = (number) => number * number;
console.log(square(2));
const sum = (a, b) => a + b;
sum(2, 3);

//2.
//escape() and unescape funtion has deprecated
//escape funtion  take string parameter and encode it but only special character are encodede by this funtion
//document.write(escape("geeks of geks"));

console.log(escape("asia hh ll!@"));
let encodeByEscape = escape("This ia cipher @ ");
console.log(encodeByEscape);
//3.
//unescape() function is the reverse of escaped()
//unescape takes string that already being ecncoded and bring in its origional form
console.log(unescape(encodeByEscape)); //get origional string
