let a="nickname";
let obj={
    name:"Dharun",
    age:25,
    "role":"TS",
    1:"number",
    any:a,
    a:"some values",
    [a]:'ggggggggg'
    
    


}

console.log(obj);
console.log(obj.name);
console.log(obj.role);
console.log(obj["name"]);
console.log(obj["role"]);
console.log(obj["1"]);
console.log(obj[1]);
console.log(obj.a);
console.log(obj.any);
console.log(obj[a])
console.log(obj.nickname);

;



//console.log(obj.1) here this is not possible because obj is variable format and 1 is datatype fromat 




