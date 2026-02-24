let result1=document.querySelector(".player1>.dice1>h1")
let result2=document.querySelector(".player1>.dice2>h1")

let p1btn=document.querySelector(".outer>.player1>.btn1")
let p1total=document.querySelector(".outer>.player1>.total>h2")
let p1value1=0;
let p1value2=0;
let total1=0;

let score1=0;
let score2=0;

let p2btn=document.querySelector(".outer>.player2>.btn2")

let p1turn=document.querySelector(".player1>h1")
let p2turn=document.querySelector(".player2>h1")
p1btn.addEventListener("click",()=>{
   score1++; 
    p1btn.disabled = true;
    p2btn.disabled=false
    p1turn.innerHTML=`Turn:${score1}`
    p1value1=Math.ceil(Math.random()*6);
    console.log(p1value1);
    
    p1value2=Math.ceil(Math.random()*6);
    console.log(p1value1);
    result1.innerHTML=p1value1
    result2.innerHTML=p1value2
    total1=total1+p1value1+p1value2
    console.log("total 1 "+total1);
    console.log(p1total);
    p1total.innerHTML=`${total1}`
    
    
    
    
})
//--------------------------------------------------------------------
let result11=document.querySelector(".player2>.dice11>h1")
let result22=document.querySelector(".player2>.dice22>h1")


let p2total=document.querySelector(".outer>.player2>.total>h2")
let p2value1=0;
let p2value2=0;
let total2=0;


p2btn.addEventListener("click",()=>{
    score2++
    p2turn.innerHTML=`Turn:${score2}`
    p1btn.disabled = false;
    p2btn.disabled=true
    
    p2value1=Math.ceil(Math.random()*6);
    console.log(p2value1);
    
    p2value2=Math.ceil(Math.random()*6);
    console.log(p2value1);
    result11.innerHTML=p2value1
    result22.innerHTML=p2value2
    total2=total2+p2value1+p2value2
    console.log("total 1 "+total2);
    console.log(p2total);
    p2total.innerHTML=`${total2}`

    if(score1==5 && score2==5)
 {
    p1btn.disabled = true;
    p2btn.disabled=true;
    let myfinalscore=document.querySelector(".outer>.scoreboard>h1")
    if(total1>total2)
    {
        myfinalscore.innerHTML="Player 1 won the game!!..."
    }
    else if(total1<total2)
    {
        myfinalscore.innerHTML="Player 2 won the game!!..."
    }
    else{
        myfinalscore.innerHTML="Game can be draw!!..."
    }

    let myletstartbtn=document.createElement("button")
    myletstartbtn.innerHTML="Let's Start Again"
    myletstartbtn.style.margin="20px"

    myfinalscore.append(myletstartbtn)
    myletstartbtn.addEventListener("click",()=>{
        p1btn.disabled = false;
        p1turn.innerHTML=`Turn:`
        p2turn.innerHTML=`Turn:`
        myfinalscore.remove()
        myletstartbtn.remove()
        total1=0;
        total2=0;
         result1.remove()
         result2.remove()
          result11.innerHTML=""
    result22.innerHTML=""
     result1.innerHTML=""
    result2.innerHTML=""
    p2total.innerHTML=""
    p1total.innerHTML=""
    
    score1=0;
    score2=0;
    })


}

    
    
})












