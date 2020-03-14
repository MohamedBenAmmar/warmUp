// 1 - Complete the function cube that returns the cube of x:
// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'


function cube(x) {
  return x*x*x;
}



function sameLength(string1, string2) {
 if (string1.length=== string2.length) {
 	return true;
 }
return false ;
}



function scoreToGrade(number) {
 if ((number <= 100 ) && (number>=80)) {
 	return 'A'
 }
 else if ((number<80)&&(number>=50)){
 	return 'B'
 }
return 'C'  
}

function repeatString(str, count) {
  if (count === 0) {
  	return "";
  }
 return str +'  '+repeatstring(str,count-1);
}
