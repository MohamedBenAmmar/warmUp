// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively

// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
<<<<<<< HEAD

function larger (x,y){
	if (x.length > y.length) {
		return x;
	} 
return y;
}
function smaller (x,y) {
	if (x.length < y.length) {
		return x;
	}
return y;
}

// i did a function that will show us for the first time n and everytime we call it again it gives us n+1
var i = 0;
function counter (n){
	if (i==0) {
		i=i+1;
		return n ;
	}
else {
n=n+i;	
i=i+1;
return n;
}
}
=======
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391
