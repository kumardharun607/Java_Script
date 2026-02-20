let mysect=document.querySelector("section");
let myh1=document.createElement("h1");
let myp1=document.createElement("p");
let mybtn1=document.createElement("button");

myh1.innerText="iam from js h1 as section"
myp1.innerText="iam from js p1 as section"
mybtn1.type="submit"
mybtn1.innerText="Submit"

mysect.prepend(myh1,myp1,mybtn1);

let myfooter=document.querySelector("footer");
myfooter.innerHTML+="<h1>iam from js h1 as section</h1><p>iam from js p1 as section</p><button type='reset'>Reset</button>"

