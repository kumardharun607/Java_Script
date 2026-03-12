let mysection=document.querySelectorAll("section")[0]
let myget=document.querySelectorAll("button")[0]
let mypost=document.querySelectorAll("button")[1]
let myone=document.querySelectorAll("button")[2]
let myput=document.querySelectorAll("button")[3]
let mydelete=document.querySelectorAll("button")[4]


myget.addEventListener("click",async()=>{

    mysection.innerHTML=""
    let myfetch=await fetch("https://69a689b6feb94223b31d55f8.mockapi.io/Userdatas")
    let data=await myfetch.json()
    console.log(data);
   

    data.forEach(e => {
         let myh3=document.createElement("h3");
         myh3.innerHTML=e.name
         mysection.append(myh3)


        
    });
    
})
let myobj={
    name:"Dharun"

}
mypost.addEventListener("click",async()=>{
    let myfetch=await fetch("https://69a689b6feb94223b31d55f8.mockapi.io/Userdatas",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(myobj)
    })
    let data=await myfetch.json()
    console.log(data);
    
})
myone.addEventListener("click",async()=>{

    let r=Math.ceil((Math.random()*99)/2)
    mysection.innerHTML=""
    let myfetch=await fetch(`https://69a689b6feb94223b31d55f8.mockapi.io/Userdatas/${r}`)
    let data=await myfetch.json()
    console.log(data);
    let myh3=document.createElement("h3");
    myh3.innerHTML=data.name
    mysection.append(myh3)
    
})
myput.addEventListener("click",async()=>{
    let obj2={
        name:"Dharunkumar"
    }
    let myfetch=await fetch("https://69a689b6feb94223b31d55f8.mockapi.io/Userdatas/56",
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj2)

        }
    );
    let data=await myfetch.json()
    console.log(data);
    
})
mydelete.addEventListener("click",async()=>{

    let myfetch=await fetch("https://69a689b6feb94223b31d55f8.mockapi.io/Userdatas/56",{
        method:"DELETE"
    })
    let data=await myfetch.json()
    console.log(data);
    

})