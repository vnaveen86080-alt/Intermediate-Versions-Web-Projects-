//getting buttons

const startBtn=document.querySelector("#startBtn")
const stopBtn=document.querySelector("#stopBtn")
const resetBtn=document.querySelector("#resetBtn")
const milliSec=document.querySelector("#milliSec")
const seconds=document.querySelector("#second")
const minutes=document.querySelector("#minutes")

//start Function

 let i=0
 let second=0
 let minute=0
 let timer;

function startCount(){

   
    

   timer= setInterval(() => {
        if(i<60){
        i++
        milliSec.textContent=i
        }
        else{
            i=0;
            secInc()
            minuteSec()
        }
        
    },5);

    startBtn.disabled=true

}
function secInc(){
if(i===0){
    second++
    seconds.textContent=String(`${second}:`).padStart(3,"0")
}

}

function minuteSec(){
    if (second===60){
        second=0
        minute++
        minutes.textContent=String(`${minute}:`).padStart(3,"0")

        
    }
    else{
        minute.textContent=0
    }
}
    
function clearData(){
  clearInterval(timer)
  startBtn.disabled=false
}

function erase(){
  i=0
  second=0
  minute=0
  seconds.textContent=String(`${0}:`).padStart(3,"0")
  minutes.textContent=String(`${0}:`).padStart(3,"0")
  milliSec.textContent=String(`${0}`).padStart(2,"0")
  clearInterval(timer)
  startBtn.disabled=false

}
  

    
