let myinput=document.querySelectorAll("input")[0]
let myoutput=document.querySelectorAll(".output")[0]
let mybtn=document.querySelector("button")

console.log(myinput);
console.log(myoutput);
console.log(mybtn);


mybtn.addEventListener("click",async()=>{
    let mykey="39369b4b3065946c112d06bdc62bd7de";
    let mykey1="ba3b6d622ab0ab765c9d898d6e6ee6ca"
    let myfetch=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myinput.value}&appid=${mykey}`)
    myoutput.innerHTML=""
    console.log(myfetch);
   let data=await myfetch.json()
   let myh3=document.createElement("h3")
   myh3.innerHTML=`City Name:${data.name}`
   myoutput.append(myh3)
    console.log(data);
    let mytemp=document.createElement("h3")
    mytemp.innerHTML=`City Temperature:${Math.floor(data.main.temp-273)} ºcelsius`
    myoutput.append(mytemp)
    let mywheather=document.createElement("h3")
    mywheather.innerHTML=`Climate : ${data.weather[0].main}`
    myoutput.append(mywheather)
    let mywind=document.createElement("h3")
    mywind.innerHTML=`Wind :${data.wind.speed} km/hr`
    myoutput.append(mywind)
   


   
    
    

})
