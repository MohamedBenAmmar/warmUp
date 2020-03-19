// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun(){
	return true ;
}

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
function color(string){
return (typeof string ==="string") ?  true :  false ;
}

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function prime (x){
	var test=true;
	for (var i=x-1; i>1 ;i--){
		if (x%i===0) {
		 test=false ;
		}
	}
	return test;
}

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function compare (x,y){
	return x===y ?  true : false ;
}
