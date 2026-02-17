let myinput=document.querySelectorAll("input")[0];
let mypara=document.querySelectorAll("p")[0];
let mybutton=document.querySelectorAll("button")[0];

//add event listener

// mybutton.addEventListener("click",()=>{
//     console.log("Button will be clicked by add event listener.....");
    
// })

//element property
// mybutton.onclick=()=>{
//     console.log("Button will be clicked by element property.....");
// }

//html attribute
// function abc()
// {
//     console.log("Iam from js");
    
// }

// mybutton.onclick=()=>{
//     console.log("Button will be clicked by element property.....");
//     mypara.innerHTML="here paragraph will be modified...."
// }
// function para_modify()
// {
//     console.log("Iam from js");
//     mypara.innerHTML="here paragraph will be modified**********...."
// }

//keybord events

// myinput.addEventListener("keydown",()=>{
//     console.log("hello");
    
// })

myinput.addEventListener("keyup",()=>{
    console.log("hello");
    
})

//mouse events
mybutton.addEventListener("click",()=>{
    console.log("iam from single click");
    
})
mybutton.addEventListener("dblclick",()=>{
    console.log("iam from double click");
    
})
// myinput.addEventListener("mouseover",()=>{
//     console.log("Here mouse will be hover.......");
    
// })

// myinput.addEventListener("mouseleave",()=>{
//     console.log("Here mouse will be hover.......");
    
// })

// myinput.addEventListener("mouseup",()=>{
//     console.log("Here mouse will be hover.......");
    
// })
myinput.addEventListener("mousemove",()=>{
    console.log("Here mouse will be hover.......");
    
});
let myheader=document.querySelectorAll("h1")[0]
myheader.addEventListener("mouseover",()=>{
    myheader.style.fontSize="100px"
    console.log("events..");
    
})