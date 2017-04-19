/*
x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

http://www.codewars.com/kata/shortest-word/train/javascript
*/

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(word => word.length));
}

str = "bitcoin take over the world maybe who knows perhaps";
console.log(findShort(str));