let mysection=document.querySelectorAll(".section")[0]
let mydiv=document.querySelectorAll(".child")[0]
let mybtn=document.querySelector("button")

mysection.addEventListener("click",()=>{
    console.log("Iam from section");
    
})

mydiv.addEventListener("click",(event)=>{
    console.log("Iam from div");
    
})

mybtn.addEventListener("click",(e)=>{
    
    e.stopPropagation()
    
    console.log("Iam from button");
    
})