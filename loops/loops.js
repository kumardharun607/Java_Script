//to print 1 to 100
for(let i=1;i<=100;i++)
{
   console.log(i);
   
}
//to print 100 to 1
for(let i=100;i>=1;i--)
{
    console.log(i);
    
}
let n=5;
let n1=1;
//Even numbers
while(n1<=100)
{
    if(n1%2==0)
    {
        console.log(n1);

        
    }
    n1++;
}
n1=1;
//Odd numbers
while(n1<=100)
{
    if(n1%2!=0)
    {
        console.log(n1);

        
    }
    n1++;
}
let ipl=["csk","mi","kkr","gt","rr","srh","rcb"];
for(let i=0;i<ipl.length;i++)
{
    console.log(ipl[i]);
    console.log();
    
    
}
for(let s of ipl)
    console.log(s);
console.log("To print the index");
for(let s in ipl)
    console.log(s);

    
let pno=['6','3','7','9','8','8','8','3','4','0'];
for(let a=0;a<pno.length;a++)
{
    console.log(pno[a]);
    
}
let std={
    name:"iphone",
    price:234445,
    rating:4.5,
    availability:true

}
for(let key in std)
{
    console.log(key);
    console.log(key +":" + std[key]);
    
    
}
let a=20;
let b=20.05
let c=05;
console.log(a + typeof a);
console.log(b + typeof a);
console.log(c);

let d=new Number(09846);
console.log(d);

let str1="adcd";
let str2="efgh";
let str3="ijkl";
let str4=new String("mnop");
