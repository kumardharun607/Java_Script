// let mypromise=new Promise((res,rej)=>{
// res("success")
// })
// mypromise.then((any_parameter)=>{//whenever promise is res then only then block is executed.......
//     console.log("Iam from try block...");
//     console.log(any_parameter);
    
    
// }).catch((any_parameter)=>{
//     console.log("Iam from catch block...");
//     console.log(any_parameter);
    
// }).finally((any_parameter)=>{
//     console.log("Iam from finally block...");
//     console.log(any_parameter);
// })


let proposal=new Promise((res,rej)=>{
    console.log("Will you marry me ?");
    let luck=Math.floor(Math.random()*2)
    console.log(luck);
    
    if(luck)
    {
        res("He will get chocolate")
    }
    else{
        rej("he will get tears")
    }
    
})
// proposal.then((a)=>{
//     console.log(a);
    
// }).catch((b)=>{
//     console.log(b);
    
// }).finally((c)=>{
//     console.log(c);
//     console.log("Friends ku party");
    
    
// })

async function abc() {
    try{
        let res=await proposal
    console.log(res);
    }
    catch(e)
    {
        console.log(e);
        

    }
    
}

