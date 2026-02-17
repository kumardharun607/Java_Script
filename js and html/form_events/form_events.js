let myform=document.querySelector("form");
let myuser=document.querySelectorAll("input")[0];
let mypass=document.querySelectorAll("input")[1];
let mybtn=document.querySelectorAll("button")[0];

myform.addEventListener("reset",()=>{  //reset,submit,click,

       //Events for form=input,change,reset,submit
    console.log("iam from click event");
   
    
    
    
})
myuser.addEventListener("input",()=>{
    console.log(myuser.value);
    
})
mypass.addEventListener("change",()=>{
    console.log(mypass.value);
    
})

//window events

window.addEventListener("load",()=>{
    console.log("Your page is loading");
    
})
window.addEventListener("unload",()=>{
    console.log("Your page is un loading");
    
})
window.addEventListener("resize",()=>{
    console.log("Your page is Resizing");
    console.log("This is current page height "+window.innerHeight);
    console.log("This is current page Width "+window.innerWidth);
    
})
window.addEventListener("scroll",()=>{
    console.log("Your page is scrolling");
    
    
})
window.addEventListener("beforeunload",()=>{
    console.log("Your page is unloading");
    
    
})