let count=-1;
let img=document.querySelectorAll("img")[0];
let heading=document.querySelectorAll("h1")[0];
// let title=["Forest 1","Forest 2","Forest 3","Forest 4"]
// let storage=["../media/4.webp","../media/3.webp","../media/2.webp","../media/1.webp"];
let storage=[{name:"Forest1",img:"../media/1.webp"},{name:"Forest2",img:"../media/2.webp"},{name:"Forest3",img:"../media/3.webp"},{name:"Forest4",img:"../media/4.webp"}]
let stop=setInterval(()=>{

    count++
    if(count==storage.length)
    {
        

        count=0;
    }
    img.src=storage[count].img;
    heading.innerHTML=storage[count].name
   
    
  
    

},3000)