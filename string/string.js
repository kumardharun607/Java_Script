let str1="iam from js";
console.log(str1);
let str2=new String("hi hello");
console.log(str2);
let str3="HI IAM FROM UPPERCASE STRING";
console.log(str3.toLowerCase());
console.log(str3);
let str4="                        iam from space string        ";
console.log(str4.concat("hi================="));



































console.log(str4+"---------"+str4.length);

console.log(str4.trim()+"-------"+str4.trim().length);//remove space both front and backside
console.log(str4.trimStart()+"---------"+str4.trimStart().length);//remove space from starting 
console.log(str4.trimEnd()+"---------"+str4.trimEnd().length);//remove space from ending

console.log(str4.indexOf("a"));

console.log(str4.lastIndexOf("a"));
let a=str4.split(" ");
console.log(a);
console.log(str4.lastIndexOf("a",200));//lastIndexOf("String",start index)


console.log(str3.includes(str4));
console.log(str4.charAt(25));
console.log(str4.slice(5,35));
console.log(str4.slice(35,5));
console.log(str4.slice(-10,-1));
console.log(str4.substring(5,35));
console.log(str4.substring(35,5));
console.log(str4.substring(-10,-1));






















