// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
function objKey (obj){
	var arr=[];
	for (var x in obj ){
		arr.push(x);
	}
	return arr;
}
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
function objLength (obj){
	var i=0;
	for (var x in obj ){
		i++;
	}
	return i ;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
function objSort (arr){
	var x;
	do
	{
	var change=false;
	for (var i=0 ; i < arr.length -1  ;i++){
		if (arr[i].id > arr[i+1].id ) {
			x = arr[i+1];
			arr[i+1]=arr[i];
			arr[i]=x;
			change=false;
		}
	}
}while (change===true);
return arr;
}