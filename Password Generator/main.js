let lowercase = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
];

let uppercase = [
  "A","B","C","D","E","F","G","H","I","J",
  "K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z"
];

let numbers = [
  "0","1","2","3","4","5","6","7","8","9"
];

let symbols = [
  "!","@","#","$","%","^","&","*",
  "(",")","-","_","+","=",
  "[","]","{","}","|","\\",
  ";",":","'",'"',",",".",
  "<",">","?","/"
];
let passText=document.getElementById("passText")
let checkBoxes=document.querySelectorAll(`input[type="checkbox"]`)
let range=document.getElementById("rangeSlider")
let span=document.querySelector("span")
range.addEventListener("input",()=>{
  span.textContent=range.value
})
function generate(){
  if(checkBoxes[0].checked&&checkBoxes[1].checked&&checkBoxes[2].checked){
    passText.textContent=""
    let lun=lowercase.concat(uppercase,numbers)
    for(i=0;i<range.value;i++){
      let pass=Math.floor(Math.random()*lun.length)
      passText.textContent+=lun[pass]
    }
  }
  
  else if(checkBoxes[0].checked&&checkBoxes[1].checked){
    passText.textContent=""
    let lowerUpper=lowercase.concat(uppercase)
    for(i=0;i<range.value;i++){
      let pass=Math.floor(Math.random()*lowerUpper.length)
      passText.textContent+=lowerUpper[pass]
    }

  }
  else if(checkBoxes[0].checked){
  passText.textContent=""
  for(i=0;i<range.value;i++){
    let pass=Math.floor(Math.random()*26)
    passText.textContent+=lowercase[pass]
  }}
   else if(checkBoxes[1].checked){
  passText.textContent=""
  for(i=0;i<range.value;i++){
    let pass=Math.floor(Math.random()*26)
    passText.textContent+=uppercase[pass]
  }}
   else if(checkBoxes[2].checked){
  passText.textContent=""
  for(i=0;i<range.value;i++){
    let pass=Math.floor(Math.random()*numbers.length)
    passText.textContent+=numbers[pass]
  }}

 }

  function copyText(){
  navigator.clipboard.writeText(passText.textContent)
  alert("Password Copied")
}


// clipboard API

let copyBtn=document.getElementById("copyBtn")


