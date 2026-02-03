let arr1=[1,2,3,4,5];
let arr2=new Array(6,7,8,9,10);
console.log(arr1);
console.log(arr2);
let arr3=Array.from("Strings");
console.log(arr3);

//methods will modify original string

let arr4=[1,2,3,4,5,6,7,8,9,10];
console.log(arr4);
arr4.pop();//remove last element
console.log(arr4);
arr4.push("hi");//add element for last position
console.log(arr4);

arr4.shift()//remove first element
console.log(arr4);
arr4.unshift("Hello")//add element for first position
console.log(arr4);
arr4.splice(2,2);//remove  element in b/w splice(start_index,no_of_element)
console.log(arr4);
arr4.splice(2,2,"Dharun","Saran")

console.log(arr4);
arr4.reverse()
console.log(arr4);
console.log(arr4.sort());



