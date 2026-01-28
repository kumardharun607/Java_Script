let a=true;
let b=false;

let c=Boolean(0);
let d=Boolean(1);
let e=Boolean(NaN);
let f=Boolean(false);
let g=Boolean(undefined);
let h=Boolean(null);
let i=Boolean("");
let j=432;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

if(" ")
{
    console.log(`${j} if block will be true`);
    
}
let n1=10;
if(n1%2==0)
{
    console.log(`${n1} Even`);
    
}
else{
    console.log(`${n1} odd`);
    
}
if(n1>0)
{
    console.log(`${n1} is possitive number`);
    
}
else{
    console.log(`${n1} is negative number`);
}
if(n1>0)

    console.log(`${n1} is possitive number`);
    

else
    console.log(`${n1} is negative number`);
let amount=10000;
if(amount>10000)
{
    console.log("We can go to goa");
    
}
else if(amount>4000)
{
    console.log("we can go to ooty");
    
}
else if(amount<100)
{
    console.log("tea kudichittu thoongiduvom");
    
}
let day=5;
switch(day)
{
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid option");
       
}
let n2=10;
let n3=20;
let n4=30;
let result= (n2>n3)?((n2>n4)?n2:n4):((n3>n4)?n3:n4)
console.log(result);
