 let main=document.querySelectorAll("main")[0]
let myfetch=fetch("https://fakestoreapi.com/products")
// myfetch.then((res)=>{
//     console.log(res);
//     let data=res.json()
//     data.then((response)=>{
//         console.log(response);
        
//     })
    
// })
async function abc()
{
    let res=await myfetch//res contains header ,body ,status AND HERE RETURN RESPONSE OBJECT
    console.log(res);
    let data=await res.json()
    

data.forEach((element => {
    console.log(element);
       console.log(data);
   let myh1=document.createElement("h3")
   console.log(myh1);
   myh1.innerHTML=element.title
   
   let myimage=document.createElement("img")
   myimage.src=element.image
  
   let myprice=document.createElement("h3")
   myprice.innerHTML=`Price:${element.price}`
   
   let myrating=document.createElement("h3")
   myrating.innerHTML=`Rating: ${element.rating.rate} | Count:${element.rating.count}`

   let mybtn=document.createElement("button")
   mybtn.textContent="Add to Cart"

   let mydiv=document.createElement("div")
   mydiv.append(myimage,myh1,myprice,myrating,mybtn)
   main.append(mydiv)
   

   
    
    
}));
   
   


}
abc()