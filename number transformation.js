
                                      // NUMBER TRANSFORMATION


// // You are given an array of numbers:
// // const numbers = [2, 5, 8, 12];
// // 1.Write a function that returns the square of a number.
//  2.Use this function to create a new array of squared numbers.
//  3.Create a new array containing only the squared numbers that are greater than 50.
// 4.Calculate the sum of all squared numbers.


let num=[2,5,8,12]
let square=num.map(num=>num**2)
console.log(square)

let greater=square.filter((a)=>a>50)
console.log(greater)
let sum=square.reduce((a,b)=>a+b)
console.log(sum)
 


