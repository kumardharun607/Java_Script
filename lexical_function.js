function parent()
{
    console.log("Iam from parents function");
    
    let a=100;
    let b=200;

    console.log(a,b);
    child()
    function child()
    {
        console.log("Iam from child function");
        let c=10;
        let d=20;
        console.log(c,d);
        console.log(a,b);
        
        
        
    }
    
}
parent();