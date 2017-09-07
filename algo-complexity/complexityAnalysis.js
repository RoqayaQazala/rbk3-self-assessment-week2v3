// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*1) constant:running time of statement
			O(1) :it's a constant time function that will perform in the same time no matter what argument is.
2) linear:running time of loop.
3) quadratic: running time of two loops./maybe it has one loop and built in loop inside it.
4)logarithmic: running time of loop but with if condition.

*/
//example 
O(1)
function(a,b)
{
	return a*b;
}

O(n)
function(array)
{
	var newarr=[];
	for (var i = 0; i < array.length; i++) {
		if(array[i]>3){
			newarr.push(array[i])

		}
	}
}


O(log(n))

function(array)
{
	var newarr=[];
	for (var i = 0; i < array.length/2; i++) {
		if(array[i]%2===0){
			newarr.push(array[i])

		}
	}
}

