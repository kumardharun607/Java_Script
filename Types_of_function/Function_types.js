//named function
function add(a,b)
{
    console.log("Add"+a+b);
    
}
//function with expression
let subtract_function=function subtract(a,b){
    console.log("Subtracting"+(a-b));
    return "hi***********";
    

}
subtract_function(2,5);//by using only we can call the function
console.log(subtract_function(5,8));//by using we can call and also print the returned value


//subtract_function(5,6);

//ananimous function
/*function()
{

}
*/

let ananimous_add=function(a,b)
{
    console.log("Ananimous functin add"+a+b);
    return "Hello***********";
    
}
ananimous_add(10,5);//by using only we can call the function
console.log(ananimous_add(10,5));//by using we can call and also print the returned value



//IIFE --> Imediately invoked function expression

(function (){

    console.log("Iam IIFE funtion");
    
})()

/*Arrow function

              Syntax: let variable_name= ([Formal arguments])=>{
                 
                }

*/
//Arrow funtion
//1)METHOD 1

let arrow_add=(a,b)=>{
    console.log(a);
    console.log(b);
    
    
    return a+b;
    
}
arrow_add(10,5);//by using only we can call the function
console.log(arrow_add(100,200));//by using we can call and also print the returned value

let arrow_subtract=(a,b)=>{
    console.log(a);
    console.log(b);
    
    
    
    
}
arrow_subtract(150,300);
console.log(arrow_subtract(150,300));//here will call the function and print the returned value
                                     //but here the function will not return any value so it's O/P is undefined


/*RECURSION
let arrow_mul=(a,b)=>{
    console.log("A value is"+a);
    console.log("B value is"+b);
    arrow_mul(2,3);
    
}
arrow_mul(5,3);
*/

//Arrow function
//2)METHOD 2
let arrow_mullti=(a,b)=>a*b;
console.log(arrow_mullti(10,20));

//3)METHOD 3
let square=a=>a*a;
console.log(square(10));


