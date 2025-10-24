// You have an array of products with their prices:
// const products = [
//   { name: "Shoes", price: 50 },
//   { name: "Hat", price: 15 },
//   { name: "Jacket", price: 120 },
//   { name: "Socks", price: 5 }
// ];
//  Create a new array of product names.
// - Create a new array of discounted prices (20% off for each product).
// - Filter the products to get only those with a discounted price > 20.
// - Calculate the total discounted price of all products.


const products = [
   { name: "Shoes", price: 50 },
   { name: "Hat", price: 15 },
   { name: "Jacket", price: 120 },
   { name: "Socks", price: 5 }
 ];

let name=products.map(products=>products.name)
console.log(name)

let discounted=products.map(products=>products.price*80/100)
console.log(discounted)

let filter=discounted.filter((a)=> a>20)
let productName=[]
for(i of filter){
  productName.push(i.name)
}
console.log(productName)

let total=discounted.reduce((a,b)=>a+b)
console.log(total)

