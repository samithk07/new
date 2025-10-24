// You have an array of orders from an online store:
// jsx
// const orders = [
//   { id: 1, customer: "Alice", total: 250, status: "completed" },
//   { id: 2, customer: "Bob", total: 80, status: "pending" },
//   { id: 3, customer: "Charlie", total: 120, status: "completed" },
//   { id: 4, customer: "Dave", total: 300, status: "completed" },
//   { id: 5, customer: "Eve", total: 50, status: "pending" }
// ];
// *Tasks:*
// 1. Create a *new array* containing only the *totals of completed orders*.
// 2. Calculate the *sum of all completed order totals*.
// 3. Create a *new array of customer names* who have *completed orders with totals greater than 200*.
// 4. Combine steps 1–3 into *a single chain of methods*, if possible, without using any intermediate variables.
// 5. Write a *function* that, given an order object, returns a string like:
    
//     "Customer <name> has an order of $<total> and its status is <status>".
    
//     Use this function to *print all orders* to the console.


let orders = [
  { id: 1, customer: "Alice", total: 250, status: "completed" },
  { id: 2, customer: "Bob", total: 80, status: "pending" },
  { id: 3, customer: "Charlie", total: 120, status: "completed" },
  { id: 4, customer: "Dave", total: 300, status: "completed" },
  { id: 5, customer: "Eve", total: 50, status: "pending" }
];

// 1.
//  let num =function (value){
//     if (value.status==="completed"){
//         return value
//     }
//    }
   
// let completedOrder=orders.filter(num)
// console.log(completedOrder)

// 1.this is the second way to create
let arry=[]
for(let i of orders){
    if(i.status==="completed"){
        arry.push(i)
    }
}
console.log(arry);
// // 2.
let totalSum=[]
for (x of arry){

  totalSum.push(x.total)

}
let totalofSum=totalSum.reduce((a,b)=>a+b)
console.log("Sum of all completed order is: "+totalofSum)
// // 3.
let customerName=arry.filter(a=>a.total>200)
let customerNameArray=[]
for(a of customerName){
customerNameArray.push(a.customer)
}
console.log("CUSTOMER NAME WHO HAS PURCHASED ABOVE 200 : " +   customerNameArray)

// 4.




// 5.
function string(value){
  return `Customer ${value.customer} has an order of ${value.total} and its status is ${value.status}`
}
orders.forEach(order=>
  console.log(string(order)))







