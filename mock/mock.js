let fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, []);
console.log(count.apple);
let ob={name:"dharun"}
count[1]=ob
console.log(count);
