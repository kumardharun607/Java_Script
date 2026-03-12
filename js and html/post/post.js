let mygetbutton=document.querySelectorAll("button")[0]
let mypostbutton=document.querySelectorAll("button")[1]
let mysection=document.querySelectorAll("section")[0]

mygetbutton.addEventListener("click",async()=>{

    console.log("iam get");
    
    let myfetch=await fetch("https://api.escuelajs.co/api/v1/users")
    let data=await myfetch.json()
    console.log(data);
    mysection.innerHTML=""
    data.forEach(e => {
        let myimg=document.createElement("img")
        myimg.src=e.avatar
        let myh1=document.createElement("h1")
        myh1.innerHTML=e.name

        mysection.append(myimg,myh1)
    });
    

})

let obj={
    name:"Dharun",
    email:"dharun@gmail.com",
    password:12345,
    avatar:"https://tse4.mm.bing.net/th/id/OIP.La2QEkGcuG-Tt4gMVgHTiwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
}

mypostbutton.addEventListener("click",async ()=>{
    let ref=await fetch("https://api.escuelajs.co/api/v1/users",{method:"POST",headers:{"content-Type":"application|json"},body:JSON.stringify(obj)})
})