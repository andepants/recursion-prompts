/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

//strategy
// base case is n = 0;
// create a variable and multipy by each call n-1

//pseudocode
//create variable result;
// check if n = 0;
  //return result
//else
  //call factorial with n - 1;
//return result
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  var result = 1;
  if (n === 0) {
    return result;
  } else {
    result = n * factorial(n-1);
  }
  return result;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

//input: an array
//output: integer that sums up the numbers in array
//edge cases: if empty array return 0
//constraints: none

//strategy
//base case is when the lenght of array is equal to variable
//add to a variable total each function call, but add 1 to the position array

//pseudocode
//check if array is empty
  //return 0
//create variable total
//create variable counter
//check if variable counter is equal to array length -1
  //return total
//else
  //add array position at counter to total and call function again with counter + 1
//return total

var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1, array.length));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

//input: array
//output: array without nested parts
//edge cases: return 0 for empty array
//Constraints: don't mutate array, use recursion

//strategy
// make new array and add to it while going through each array, if it's not array push, otherwise go into array call

//pseudocode
//create empty array, result;
//base; check if result.length is equal to array.length
  //return result
// otherwise
  //check if element 0 is NOT an array
    //push to result
    //call function with the array slice but without the first element
  //else
    //call function with element 0
//return result;

// set a base case for the current input, what do you want done?
// case 1

// set a recursive case to handled nested layers
// if nested,

  //loop over the nested structure

    // recursively call on all values
    // do we have accumulation requirements?

// this will send all values into this function as a new current input and our case(s) above would address that input


var arraySum = function(array) {
  //console.log('the current input is: ', array);
  // set a base case for the current input, what do you want done?
  // case 1
  var sum = 0;

  if (typeof array === 'number') {
    sum += array;
  }

// set a recursive case to handled nested layers
// if nested,
  if (Array.isArray(array)) {
    //loop over the nested structure
    array.forEach(function(val) {
      // recursively call on all values
      sum += arraySum(val);
      // do we have accumulation requirements?
    });

  }
  return sum;
};





// this will send all values into this function as a new current input and our case(s) above would address that input

// 4. Check if a number is even.

//input: number
//output: boolean true or false
//edge cases:
//constraints: don't use modulo

//strategy
//divide the number by 2 until I either get 0 or 1

//pseudocode
//check if n is 0
  //return true
//check if n is 1
 //return false
//call isEven with n/2
var isEven = function(n) {
  //console.log(n);
  // set a BASE case for the current input, what do you want done?
  if (n < 0) {
    n = n * -1;
  }
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  // case 1

  // return a recursive call
  return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //console.log(n);
  // set a BASE case for the current input, what do you want done?
  var sum = 0;
  // case 1
  if (n === 0) {
    return sum;
  }

  // return a recursive call
  if (n < 0) {
    sum = n + 1 + sumBelow(n + 1);
  }
  if (n > 0) {
    sum = n - 1 + sumBelow(n - 1);
  }

  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

//input: two numbers
//output: an array betwen the two numbers
//edge cases: return empty array if empty
//constraints: accepts large to small number

//strategy
//check if x is greater or smaller. if greater I want to subtract until get to the same number otherwise add
//I'll want to push each item to a new array and then return that

//pseudocode
//create array, result
//check if x equals y
  //return result
//if x less than y
  //add x + 1 to array
  //call range ( x +1)
//if x is greater than y
  //add x - 1 to array
  //call range (x -1)

var range = function(x, y) {
  //console.log('input x', x, 'input y: ', y);
  var result = [];
  // set a BASE case for the current input, what do you want done?
  // case 1
  if (x === y) {
    return result;
  }

  // return a recursive call
  if (x + 1 < y) {
    result.push(x + 1);
    result = result.concat(range(x+1, y));
  }
  if (x - 1 > y) {
    result.push(x - 1);
    result = result.concat(range(x - 1, y));
  }

  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

//input: two numbers
//output, a number
//edge cases:
//constraints:

//strategy
//base case is when exponent === 0
//create a multiplier where I multiply by the exponenet then subtract from exponent

//create variable: result
//base case
//check if exp is 0
  //return result
//else
  //multiply result by base and the function exponenet
var exponent = function(base, exp) {
  console.log('the base is: ', base, 'the exp is: ', exp);
  var result = 1;
  if (exp === 0) {
    return result;
  } else if (exp < 0) {
    exp *= -1;
    result = base * exponent(base, exp -1);
    result = 1 / result;
  } else {
    result = base * exponent(base, exp - 1);
  }
  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//input: number n
//output: true or false
//edge cases: none
//constraints: none

//strategy
//base case
//check if it is n is equal to 2 or n is 1
  //return true
//check if n is not an integer
  //return false
//return a recursive call
//return call to function with n divided by 2

var powerOfTwo = function(n) {
  console.log(n);
  if (n === 2 || n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);

};

// 9. Write a function that reverses a string.

//input: string
//output: reversed string
//edge cases: none
//constraints: don't use reverse method, use recursion

//strategy
//base case: string length will be 0
//recursion: use slice to call the string again and add the first position to variable

//pseudocode:
//create variable string: reversed
//check if string is equal to 0
  //return reversed
//else
  //get character at string 0 using charAt()
  //return string using slice without first letter;
//return reversed

var reverse = function(string) {
  var reversed = '';
  //base
  if (string.length === 0) {
    return reversed;
  } else {
    var lastLetter = string.charAt(string.length - 1);
    reversed = lastLetter + reverse(string.slice(0, string.length -1));
  }
  return reversed;
};

// 10. Write a function that determines if a string is a palindrome.

//input: string
//output: true or false if palindrome
//edge cases:
//constraints: ignore spaces and capital, use recursion

//strategy:
//base: if string length is same as reveresedString
//check if they are equal
//recursion: add the string in reverse

var palindrome = function(string) {
  //console.log(string);
  string = string.toLowerCase().trim();
  //base
  if (string.length === 0) {
    return true;
  } else {
    if (string.charAt(0) === string.charAt(string.length - 1)) {
      return palindrome(string.slice(1, string.length - 1));
    } else {
      return false;
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

//input: an object, and the value we want to know amount of iteration
//output: a number
//edge cases: none
//constraints: use recursion

//strategy: use recursion to iterate through everything and once you find a value add to a variable

//pseudocode:


var countValuesInObj = function(obj, value) {
  //console.log('the obj is: ', obj, 'the value is: ', value);
  // set a base case for the current input, what do you want done?
  // case 1
  var occurence = 0;
  if (obj === value) {
    occurence += 1;
  }

  // set a recursive case to handled nested layers
  // if nested,
  if (typeof obj === 'object') {
    //loop over the nested structure
    for (var val in obj) {
      // recursively call on all values
      occurence += countValuesInObj(obj[val], value);
      // do we have accumulation requirements?
    }
  }
  return occurence;

// this will send all values into this function as a new current input and our case(s) above would address that input
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

//input: obj, key to find, new key name
//output: obj with updated key names
//edge cases:
//constraints: recursion, mutate original obj

//strategy: iterate throught object, if key name is there, replace with new key.


var replaceKeysInObj = function(obj, oldKey, newKey) {
  console.log('obj', obj, 'oldkey', oldKey, 'newKey :', newKey);
  // set a base case for the current input, what do you want done?
  // case 1
  if (obj === oldKey) {
    obj = newKey;
  }

  // set a recursive case to handled nested layers
  if (typeof obj === 'object') {
    //loop over the nested structure
    for (var val in obj) {
      // recursively call on all values
      if (val === oldKey) {
        val = newKey;
      }
      replaceKeysInObj(val, oldKey, newKey);
      // do we have accumulation requirements?
    }
  }
  console.log('the after obj', obj);
  return obj;
// this will send all values into this function as a new current input and our case(s) above would address that input
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
