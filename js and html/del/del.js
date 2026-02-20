let mydiv=document.querySelector("div");
let myHead=document.querySelector("h1");
let mypara=document.querySelector("p");
let mybtn=document.querySelector("button")

//mydiv.removeChild(mypara)
//mypara.remove()
mybtn.addEventListener("click",()=>{
    //mypara.remove();
    mypara.innerHTML=`<del>${mypara.innerText}</del>`
})