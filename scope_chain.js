let a=10;

function parent(){
     console.log("Iam from parent");
    console.log("Outermost global value of a "+(a));
    let a=100;
    console.log("Parent function value of a "+a);
    child();
    function child()
    {  
    console.log("Iam from Child");
    
   
    console.log("Parent function value of a "+a);
     let a=100;
     console.log("Child function value of a "+a);
    }
}
parent();