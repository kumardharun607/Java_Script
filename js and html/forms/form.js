let myemail=document.querySelectorAll("input")[0];
let mypass=document.querySelectorAll("input")[1];

// myemail.addEventListener("input",(event)=>{
//     console.log(event.target);
    
// })
// mypass.addEventListener("input",(event)=>{
//     console.log(event.target);
    
// })
// let myallinput=document.querySelectorAll("input");
// myallinput.forEach((ele)=>{
//     console.log(ele);
//     ele.addEventListener("input",(event)=>{
//     console.log(event.target.value);
    
// })
   
    
// });
let myform=document.querySelector("form")
myform.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(event);
    
})