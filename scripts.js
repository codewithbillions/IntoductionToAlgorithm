// function fibonacci(n) {
//     const fib = [0, 1]
//     for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
//   }
  
//   console.log(fibonacci(2)) // [0,1]
//   console.log(fibonacci(3)) // [0,1,1]
//   console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

  // function factorial(n) {
  //   let result = 1
  //   for (let i = 2; i <= n; i++) {
  //     result = result * i
  //   }
  //   return result
  // }
  
  // console.log(factorial(0)) // 1
  // console.log(factorial(1)) // 1
  // console.log(factorial(5)) // 120


// function isPrime(n) {
// if(n < 2) {
//     return false
//   }
//   for(let i = 2; i < n; i++) {
//     if (n%i===0){
//       return false
//     }
//     return true
//   }
// }

//   function isPrime(n) {
//     if (n < 2) {
//       return false
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       // if n is divisible by any number then it is not prime
//       if (n % i === 0) {
//         return false
//       }
//     }
//     return true
//   }
  // console.log(isPrime(1)) // false
  // console.log(isPrime(5)) // true
  // console.log(isPrime(4)) // false
  
  // function isPowerOfTwo(n) {
  //   if (n < 1) {
  //     return false
  //   }
  //   while (n > 1) {
  //     if (n % 2 !== 0) {
  //       return false
  //   }
  //   n = n / 2
  // }
  // return true
  // }
  // console.log(isPowerOfTwo(1)) // true
  // console.log(isPowerOfTwo(2)) // true
  // console.log(isPowerOfTwo(5)) // false

  // Given the existing code below, write a code so that their values are switched around.

// DONTS
//1) Do not change any of the existing code
//2) You are not allowed to type any numbers
//3) You should not redeclare variable a and b

// var a = "5";
// var b = "10";
// ***** Do not change the code above *****
// write your code below



//*** Do not change the code below */
// console.log('a is ' + a);
// console.log('b is ' + b);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length -1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//     return -1
//   }
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//   if (target ===arr[middleIndex]) {
//     return middleIndex
//   }
//   if(target < arr[middleIndex]) {
//   return search(arr, target, leftIndex, midddleIndex -1)
//   } else {
  
//   return  search(arr, target, middleIndex + 1, rightIndex)

//   }
  
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1

// function bubbleSort(arr) {
//   let swapped
//     do {
//       swapped = false
//       for(let i = 0; i < arr.length -1- 1; i++) {
//         if (arr[i] > arr[i+1]) {
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//         swapped= true
//         }
//       }
//     } while(swapped)
//   }
  
//   const arr =[-6, -2,4, 8, 20]
//   bubbleSort(arr)
//   console.log(arr) //[-6, -2, 4, 8, 20]

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
  let numberToInsert = arr[i]
  let j = i - 1
  while(j >= 0 && arr[j] > numberToInsert) {
  arr[j+1] = arr[j]
  j = j - 1
  }
  arr[j+1] = numberToInsert
  }
}

const arr =[8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)