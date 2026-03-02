// let myfetch=fetch()
// myfetch.then((e)=>{
//     console.log("From then");
    
//     console.log(e);
    
// }).catch((e)=>{
//     console.log("From catch");
    
//     console.log(e);
    
// }).finally((e)=>{
//     console.log("From finally");
    
//     console.log(e);
    
// })

// async function abc()
// {
//     try{
//     let myfetch=await fetch()
//     }catch(e)
//     {
//         console.log(e);
        
//     }
  
    
// }


//-----------------------------------------------------------------------------------------
// let myfetch=fetch("https://api.escuelajs.co/api/v1/productsss")

// myfetch.then((response)=>{
//     console.log("--------------Iam from response----------------");
//     let data=response.json()
//     data.then((ress)=>{
//         console.log(ress);
        
//     })
    
// }).catch((rejected)=>{
//      console.log("--------------Iam from rejected----------------");
//      let data=rejected.json()
//     data.then((ress)=>{
//         console.log(ress);
//     })
    
// })

// async function abc()
// {
//     let res=await fetch("https://api.escuelajs.co/api/v1/products")
//     let data=await res.json()//it return promise
//     console.log(data);
    
   
    
// }
// abc()

// let fakefetch=fetch('https://fakestoreapi.com/products')
// fakefetch.then((res)=>{

//     console.log(res);
//     console.log("_------------------------promise format------------------------------------");
    
//     let data=res.json()
//     console.log(data);
//     console.log("_-------------------------------js format-----------------------------");
//     data.then((response)=>{
//         console.log(response);
        
//     })
    
    
// })

// //****************************************************** */
// async function abc()
// {
//     console.log("___________________IAm from abc async----------------------------------");
    
//     let fakefetch=await fetch('https://fakestoreapi.com/products')
//     let data=await fakefetch.json()
//     console.log(data);
    
// }
// abc()

let  myfetch=fetch("https://www.shoppersstack.com/shopping/products/alpha")
myfetch.then((res)=>{
   let data= res.json()
   data.then((ress)=>{
    console.log(ress)
    
   })
})