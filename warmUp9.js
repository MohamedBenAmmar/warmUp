// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
function checkArray (x) {
	return x.isArray() ? true : false ;  
}

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

function firstElement (x,n) {
	for (var i=0 ; i < n ; i++){
		console.log(x[i]);
	}
}

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

function convert (x){
	var y=[];
	for (prop in x ){
		y.push([x[prop],x["prop"]]);
	}
	return y;
}
