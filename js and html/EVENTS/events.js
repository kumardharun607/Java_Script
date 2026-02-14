
let header=document.getElementsByTagName("h1")[0];

let mypassword=document.getElementsByTagName("input")[0]
let mybutton1=document.querySelectorAll("button")[0]
mybutton1.addEventListener("click",()=>{
    if(mypassword.type=="password" )
    {
        mypassword.type="text"
        mybutton1.innerHTML="Hide"
        header.innerHTML=("Now iam leave....")
    }
    else{
        mypassword.type="password"
        mybutton1.innerHTML="show"
         header.innerHTML="Now Iam going to School..."
    }
})
let myimage=document.getElementsByTagName("img")[0]
let mybutton2=document.querySelectorAll("button")[1]

mybutton2.addEventListener("click",()=>{
    if(myimage.style.display=="none")
    {
        myimage.style.display="inline-block"
        mybutton2.innerHTML="Hide img"
    }
    else{

        myimage.style.display="none"
         mybutton2.innerHTML="Display img"
    }
})
