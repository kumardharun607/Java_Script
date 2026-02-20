let myselect=document.querySelector("select")
let storage=["tamil nadu","karnataka","kerala","andhrapardesh","delhi","nepal","srilankha","pakistan","telugana","goa"]
storage.sort();
storage.forEach((e,i,arr)=>{
    let myoption=document.createElement("option")
    myoption.innerText=e
    myoption.value=e
    myselect.append(myoption)
    
})
myselect.addEventListener("input",()=>{
    console.log(myselect.value);
    
})