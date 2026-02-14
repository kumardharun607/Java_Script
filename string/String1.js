let s="java is java best language";
let ss=s.split(" ");
let count=0;
for(let i=0;i<ss.length-1;i++)
{
    if(ss[i]=="")
    
        continue;
    for(let j=i+1;j<ss.length;j++)
    {
        if(ss[i]==ss[j])
        {
            ss[j]="";
            count++;
        }
    }
}
console.log(s.replaceAll('a','@'));
let s4=ss.join(" ");
console.log(s4);




