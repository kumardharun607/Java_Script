//higher order function
/*let first=50;
let second=100;
function root(x,y,z){
    console.log("Value of X "+x);
    console.log("Value of Y "+y);
    console.log("Value of Z "+z);
    

}
function add(a,b){
    console.log("Value of b "+a);
    console.log("Value of b "+b);
    console.log("Sum of a+b: "+a+b);
    return a+b;
    
    
    
}
root(first,second,add(10,5));//root--higher order function
//if we pass actual argument as another function function call is cslled as higher ordered function
*/
let first=50;
let second=100;
function root(x,y,z){
    
    return (z(x,y));
    
    

}
function add(a,b){
    console.log("Value of b "+a);
    console.log("Value of b "+b);
    
    
    return a+b;
    
    
    
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

console.log("Sum : "+root(first,second,add));
console.log("Subract : "+first,second,sub);
console.log("Multiplication : "+first,second,mul);
console.log("Division : "+first,second,div);






