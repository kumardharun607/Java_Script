let mytxt=document.querySelector("textarea")
let mybtn=document.querySelector("button")

mybtn.addEventListener("click",()=>{
    let myspeak=new SpeechSynthesisUtterance(mytxt.value)
    speechSynthesis.speak(myspeak)
    console.log(speechSynthesis.getVoices());
})

let mytxt2=document.querySelectorAll("textarea")[1]
let mybtn2=document.querySelectorAll("button")[1]
let myselect=document.querySelector("select")








//------------------------------------------------DAY 2-----------------------------------------------
let allvoice=null;
speechSynthesis.addEventListener("voiceschanged",()=>{
    allvoice=speechSynthesis.getVoices();
    //----------------------------------------------------
    allvoice.forEach((e,i,arr)=>{
        let myoption=document.createElement("option")
        myoption.innerHTML=e.name
        myoption.value=e.name
        myselect.append(myoption)
    })
    
})
mybtn2.addEventListener("click",()=>{
    let myspeak=new SpeechSynthesisUtterance(mytxt2.value)
    console.log(myselect.value);
    let onevoice=allvoice.find((e)=>{
        if(e.name==myselect.value)
        {
            return e;
        }
    })
    myspeak.voice=onevoice;
 // myspeak.voice=allvoice[2]
    speechSynthesis.speak(myspeak)
    console.log(speechSynthesis.getVoices())
})



