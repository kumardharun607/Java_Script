function student(id,name,age)
{
    this.name=name;
    this.id=id;
    this.age=age;
}

let s1=new student("003","dharun","23")

let wc=["india","pakistan","west indies"]
console.log(JSON.stringify(wc));
let jsonstr=JSON.stringify(wc)
console.log(jsonstr);
console.log(typeof jsonstr);
console.log(JSON.stringify(s1));
let a=[1,2,3]
console.log(a+":"+typeof a);
let b=JSON.stringify(a)
console.log(b+":"+typeof b);
let c=JSON.parse(b)
console.log(c+":"+typeof c);






