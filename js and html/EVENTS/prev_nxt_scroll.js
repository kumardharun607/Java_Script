let storage=[{name:"Forest1",img:"../media/1.webp"},{name:"Forest2",img:"../media/2.webp"},{name:"Forest3",img:"../media/3.webp"},{name:"Forest4",img:"../media/4.webp"}]
let count=0;
let myheader=document.querySelectorAll("h1")[0]
let myimg=document.querySelectorAll("img")[0]
let myprev=document.querySelectorAll("button")[0]
let mynxt=document.querySelectorAll("button")[1]

mynxt.addEventListener("click",()=>{
    if(count<storage.length-1)
    {
        count++
    }
    myheader.innerHTML=storage[count].name
    myimg.src=storage[count].img
    
})
myprev.addEventListener("click",()=>{
    if(count>0)
    {
        count--;
    }
    myheader.innerHTML=storage[count].name
    myimg.src=storage[count].img

})