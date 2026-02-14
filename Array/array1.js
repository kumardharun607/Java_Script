let ipl=["mi","csk","kkr","rr","gt","kx1","rcb","lsg"];
let foreach_result=foreach=ipl.forEach(function (ele,i,arr){
    console.log(ele,i,arr);
    if(i==3)
    {
        ipl[i]="rrr";
    }
    
});


let i= ipl.forEach(function (ele,i,arr){
    console.log(ele,i,arr);
    if(i==3)
    {
        ipl[i]="rrr";
    }
    return 500;
});
console.log(i);
let l=console.log("---------------------------Arrow Function-----------------------");
ipl.forEach((ele,i)=>{
    console.log(ele);
    
})
console.log(l);
console.log("---------------------------Map-----------------------");
let m=ipl.map((ele,i)=>{
    console.log(ele,i);
    
})
console.log(m);

console.log("---------------------------filter-----------------------");
let n=ipl.filter((ele,i)=>{
    console.log(ele,i);
    
})
console.log(n);

console.log("---------------------------find-----------------------");
let o=ipl.find((ele,i)=>{
    
    if(ele.includes("k"))
    {
        return ele;//it return element
    }
    
})
console.log(o);

console.log("---------------------------findIndex-----------------------");

let p=ipl.findIndex((ele,i)=>{
    
    if(ele.includes("k"))
    {
        return ele;//it return index of element
    }
    
})
console.log(p);




/*console.log("---------------------------Arrow Function-----------------------");
ipl.forEach((ele,i)=>{
    console.log(ele,i);
    
})
console.log("---------------------------Map-----------------------");
ipl.map((ele,i)=>{
    console.log(ele,i);
    
})
console.log("---------------------------filter-----------------------");
ipl.filter((ele,i)=>{
    console.log(ele,i);
    
})
console.log("---------------------------find-----------------------");
ipl.find((ele,i)=>{
    console.log(ele,i);
    
})
console.log("---------------------------findIndex-----------------------");

ipl.findIndex((ele,i)=>{
    console.log(ele,i);
    
})*/

let num=[1,2,3,4,5,6,7,8,9,10];
let result_som=num.some((e)=>{
    if(e%10==0)
    {
        return e;
    }
});
console.log(num);
console.log(result_som);
let result_every=num.every((e)=>{
    if(e%10==0) 
    {
        return e;
    }
});
console.log(result_every);
let num2=[5,10,15,20,25];
let result_reduce=num2.reduce((a,e,i,arr)=>{
    console.log(a,e);
    return a+e;
    
})
console.log(result_reduce);
let result_reduce_right=num2.reduceRight((a,e,i,arr)=>{
    console.log(a,e);
    return a+e;
    
})
console.log(result_reduce_right);
let s="Hi iam dharun";
let s1=s.split(" ");
console.log(s);
console.log(s1);
console.log(s1.toString(""));
console.log(s1.join(" "));
console.log(s1.indexOf("iam"));
console.log(s1.lastIndexOf("Hi"));
console.log(s1.includes("Hi"));
console.log(s1.slice(0,2));






