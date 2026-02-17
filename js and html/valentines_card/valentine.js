let mybutton=document.querySelector("#no")
let left=60;
mybutton.addEventListener("mouseover",()=>{
    left=left+5;
    mybutton.style.left=`${left}%`
    console.log("no btn clicked...");
    
})