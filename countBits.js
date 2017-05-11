/*
Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript
*/

var countBits = function(n) {
  return n.toString(2).split(1).length-1;
};

countBits = n => n.toString(2).split('0').join('').length;

//Sumamos los elementos y como son 0's y 1's, la suma es el resultado
var countBits = function(n) {
  return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
};

num = 0;
console.log(countBits(num));
