// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
function combine (first , last ) {
	return first + ' ' + last 
}
function multiple (x,y) {
	if ((x%y)===0) {
		return true 
	}
return false 
}
function average (ages) {
	var sum=0;
	for (var i=0; i<ages.length;i=i+1){
		sum = sum + ages[i];
	}
return sum/i;
}
function age (age) {
	return age * 365 * 24 * 60 *60 ;
}