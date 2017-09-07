/*
  Write your explanation here as a comment.
  For example, you might say...
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity:constant. 
 -This function has [O(1)], because [for (var i = 0; i < key.length; i++)] means [because the lenghth is not large ]

 */

var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i,hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array
/*
 Complexity:logarithmic: running time of loop but with if condition.
  -This function has [log(n)], because [var center = Math.floor(array.length / 2)] means [because we itarete on the half of the array.]

 */


var sortedArrayContainsItem = function(array, item) {
  var center = Math.floor(array.length / 2);
  if (array[center] === item) {
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};


// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity:quadratic.
 -This function has [O(n^2)], because [ for (var i = 0; i < array.length; i++) &&& indexOf(item) !== -1 ] means [because we have loop inside loop]
 */

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
