let myinput=document.querySelector("input");
let mybtn=document.querySelector("button")
let myol=document.querySelector("ol")



mybtn.addEventListener("click",()=>{
    console.log(myinput.value);
    // myol.innerHTML+=`<li>${myinput.value}</li>`
    let myli=document.createElement("li")
    myli.textContent=myinput.value
    myol.append(myli)
    let mydel_btn=document.createElement("button");
    mydel_btn.innerHTML="Delete Task"
    myli.append(mydel_btn)
    mydel_btn.addEventListener("click",()=>{
    myli.style.textDecoration="line-through"
    mydel_btn.style.backgroundColor="red"
})
    myinput.value=""

    
})

