// console.log(scripts.add(2, 5));
// console.log(scripts.square(9))

// function addThree(a, b, c) {
//     return a + b + c}
// console.log(addThree(33, 40, 55))

// let num1 = 33
// let __num2 = 40
// let Num3 = 55

// let totalNumber = _num1 + __num2 + Num3

// console.log(totalNumber)

// Given the existing code below, write a code so that their values are switched around.

// DONTS
//1) Do not change any of the existing code
//2) You are not allowed to type any numbers
//3) You should not redeclare variable a and b

// var a = "5";
// var b = "10";
// ***** Do not change the code above *****
// write your code below
// var c = a;
// a = b;
// b = c;

//*** Do not change the code below */
// console.log('a is ' + a);
// console.log('b is ' + b);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// write a function Verify the equality of two different values.

// function checkEquality(a, b) {
//     if( a === b) {
//       return true
//   } else {
//       return false
//   }
// }

// console.log(checkEquality(5, 6))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//         }
//     return sum;
// }

//   console.log(sumTo(10));

// write a function Verify the equality of two different values.
// function checkEquality(a, b) {
//   if (a === b ) {
//       return true
//   } else {
//       return false
//   }
// }
// console.log(checkEquality( 5, 5));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       sum += i;
//   }
//   return sum
// }
// console.log(sumTo(10));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Write a SEARCH procedure (C, STR, VAR FIND,  VAR POS)
// * which searches for a
// * character C in an string STR,  and returns its position
// * if it exists.
// * FIND will be true if the element exist.

// * Write a DELETE procedure (C, STR, VAR  FIND) which
// * deletes the first occurrence
// * of a character  C in a string STR, if it exists.
// *
// * Write a DELETE_ALL procedure (C, STR) which deletes all
// * occurrences of an element C in a string STR, if it exists.

//step 1.
// function inString(searchStr, searchC) {
// let index = searchStr.indexOf(searchC);

// if (index !== -1) return index;
// return;
// }

// //procedure 1
// function searchProcedure(c, str, find, pos) {
// //step 1: Search for c str and return pistion if exist
// pos = inString(str, c);
// // Step 2: Update find if element exist
// find = Boolean(pos);

// return [find, pos];
// }

//console.log(searchProcedure("o", "bolatito"));

//Procedure 2

// function deleteProcedure(c, str, find, pos) {
// //indtruction: Delete the first occurence of a character
// // c in a string if it exists

// //Step 1: Get find from searchProcedure
// let searchArray = searchProcedure(c, str);
// find = searchArray[0];

// //Step 2: if find is true, delete first occurence
// let remnants = str
// if(find) {
//   pos = searchArray[1];
//   let remnant1 = str.substring(0, pos)
//   let remnant2 = str.substring(pos + 1, str.length);
//   remnants = remnant1 + remnant2
// }
// return remnants;
// }
// console.log(deleteProcedure("a", "bolajibola"));

// function deleteAllProcedure(c, str, find, pos) {
//   //write a DELETE_APP procedure (c, str) which deletes all occurence of an element c in a string STR, if it exists.

//   do {
//       find = searchProcedure(c, str)[0]
//       if(find) str = deleteProcedure(c, str)
//   } while (find);

//   return str
// }

// console.log(deleteAllProcedure("a", "bolajibola"));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//you have to write an optimized algorithm which finds the position of a number in an array of numbers ordered from lowest to highest.
// let array = [ 1, 4 , 6 , 6 , 7 , 8, 9]

// function findNumberPositionInOrderedArray(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number)
//     return i;
// }
// return -1
// }
// console.log(findNumberPositionInOrderedArray(array, 9))

// function recursiveFibonacci(n) {
//   if (n < 2) {
//   return n
// }
// return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1))//  1
// console.log(recursiveFibonacci(6))//  8

// function recursiveFactorial(n) {
//   if ( n === 0) {
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(5))

// function linearSearch(arr, target) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === target) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
// console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
// console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

// one for loop
//as the input inscreases time execution also inscreases
//bigO = O(n)

// function binarySearch(arr, target) {
//   let leftIndex = 0
//   let rightIndex = arr.length - 1

//   while(leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === arr[middleIndex]) {
//     return middleIndex
//     }
//     if(target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1
//       } else {
//         leftIndex = middleIndex + 1
//       }
//    }
//    return -1
//   }
//   console.log(binarySearch([-5, 2, 4, 6, 10],10)) // 4
//   console.log(binarySearch([-5, 2, 4, 6, 10],6)) // 3
//   console.log(binarySearch([-5, 2, 4, 6, 10],20)) // -1

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]


function mergeSort(arr) {
  if(arr.length < 2) {
  return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while(leftArr.length && rightArr.length) {
  if(leftArr[0] <= rightArr[0]){
    sortedArr.push(leftArr.shift())
  } else {
  sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))// [-6, -2, 4, 8, 20]