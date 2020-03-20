// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
//answer : <

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
function helloWorld (string ){
	return string==="fr" ? "Bonjour tout le monde" : string==="es" ? "hola,mundo" : "hello , world";
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverse(arr){
	var x;
	var n= arr.length;
	for (var i=0 ; i<n/2; i++){
		x=arr[i];
		arr[i]=arr[n-i];
		arr[n-i]=x;	
	}
}