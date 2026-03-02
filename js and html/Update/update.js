/*setTimeout(()=>{
    console.log("Hello from js");
    
},5000);
let count=0;
let a=setInterval(()=>{
    console.log("Hi from js "+count);
    count++;

    if(count==5)
{
    clearInterval(a)
}
},2000)*/

 let myhead=document.querySelectorAll("div")[0];
console.log(myhead);

console.log(myhead.innerText);//only text
console.log(myhead.textContent);//text,space
console.log(myhead.innerHTML);//element,text,space
let h1tag=document.querySelectorAll("h1")[0];
h1tag.innerHTML="THALA DHONI";
let a1=document.querySelector("a");
a1.innerHTML="Updated html anchor tag";
let a2=document.querySelectorAll("a")[1];
a2.innerHTML="Updated html tag";













setInterval(()=>{
    let titletag=document.querySelectorAll("title")[0];
    if(titletag.innerHTML=="Update")
        titletag.innerHTML="Updated Content"
    else
        titletag.innerHTML="Update"

},2000)




