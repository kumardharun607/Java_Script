// let obj={
//     name:"dharun",
//     email:"dharun@gmail.com",
//     mobile:123456789,
//     gender:"male",
//     job:"Developer"
// }
// // console.log(obj.name);

// // console.log(obj["name"]);

// let {name,email}=obj//DeStructuring for object
// console.log(name);
// console.log(email);
// console.log(obj.name);

// let arr=["ooty","chennai","coimbatore","tiruppur","Erode",]
// console.log(arr[0]);
// console.log(arr[0]);
// let [any,second]=arr//DeStructuring for array
// console.log(any);
// console.log(second);






let product={
    name:"laptop",
    brand:"Lenova",
    price:30000,
    RAM:"8gb"

}
let {price,name,...obj2}=product
console.log(price);
console.log(name);

console.log(obj2);//by using rest operator to create object and extract all the properties from one object
let {...product2}=product
console.log(product2);
let arr=["ooty","chennai","coimbatore","tiruppur","Erode",]
let [a,b,...arr2]=arr
console.log(a);
console.log(b);
console.log(arr2);
let[...arr3]=arr
console.log(arr3);
abc(1,2,3,4,5,6,7,8,9)
function abc(a,b,...arg)
{
    console.log(a);
    console.log(b);
    console.log(arg);
    
    
    
}







