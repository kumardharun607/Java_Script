let mydiv=document.querySelector("div");
let myh1=document.createElement("h1")

myh1.innerText="i am from js h1"
console.log(myh1);

let myA=document.createElement("a");
myA.innerText="i am from js A";
console.log(myA);

let myinput=document.createElement("input");
myinput.placeholder="Enter a name";
console.log(myinput);

// mydiv.appendChild(myh1)
// mydiv.appendChild(myA)
// mydiv.appendChild(myinput);

// mydiv.append(myA,myh1,myinput);

mydiv.prepend(myA,myh1,myinput)

// mydiv.innerHTML="<h1>Iam from js h1 on inner html</h1> <a href=''>Iam from js A on inner html</a> <input type='text'>";

mydiv.innerHTML+="<h1>Iam from js h1 on inner html</h1> <a href=''>Iam from js A on inner html</a> <input type='text'>";

