let passVal=document.querySelector(`input[type="password"]`)

let rangeParent=document.querySelector("#range")

let rangeChild=document.querySelector("#rangeSlide")

let confirmPass=document.querySelector("#confirmPass")

let confirmAlert=document.querySelector("#confirmAlert")
 

let showBtn=document.querySelector("#show")

showBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(passVal.type=="password"){
        passVal.type="text"
    }
    else{
        passVal.type="password"
    }
})
passVal.addEventListener("input",()=>{
    let inc=0;
    
    if(/[A-Z]/.test(passVal.value)){
        inc++
    }
    if(/[a-z]/.test(passVal.value)){
        inc++
    }
    if(/[0-9]/.test(passVal.value)){
        
        inc++
    }
    if(/[^a-zA-Z0-9]/.test(passVal.value)){
        inc++
}
    rangeChild.style.width=`${inc*25}%`
    rangeChild.style.backgroundColor="red"
   
})
  let sign=document.getElementById("sign")
  let form=document.querySelector("form")

form.addEventListener("submit",(d)=>{
    d.preventDefault()
    if(rangeChild.style.width != `${100}%`){
    console.log("Please Enter Password Correctly")

}
})

let email=document.querySelector("#email")

let emailAlert=document.querySelector("#emailAlert")

email.addEventListener("input",()=>{
   let emailText= email.value
    if(emailText.indexOf(".")>emailText.indexOf("@")){
        emailAlert.style.display="none"
    }
    else{
        emailAlert.style.display="block"

    }
})

confirmPass.addEventListener("input",()=>{
    let confirmpassVal=confirmPass.value
    if(passVal.value != confirmpassVal){
        confirmAlert.style.display="block"

    }
    else{
       confirmAlert.style.display="none"
    }
}
)

let c="naveen@gmail.com"



console.log(c.indexOf(".")>c.includes("@"))