const description=document.querySelector("#description")
const amount=document.querySelector("#amount")
const balance=document.querySelector("#balance")
const income=document.querySelector("#income")
const expense=document.querySelector("#expense")
const table=document.querySelector("table")

let bie=JSON.parse(localStorage.getItem("balincexp"))||[]

let balanceview;
let incomeView;
let expenseView;

class collectionData{
    constructor(desc,amo){
        this.desc=desc
        this.amo=amo
    }
}
let i=0
let store=JSON.parse(localStorage.getItem("descamoData"))||[]


function addData(){
    let amountData=new collectionData(description.value,amount.value)
    store.push(amountData)
    rowCreation()
    localStorage.setItem("descamoData",JSON.stringify(store))
    incomeAdd()
    expenseVisual()
    balanceVisual()
}

function rowCreation(){
    table.innerHTML+=` <tr>
            <td>${store[i].desc}</td>
            <td>${store[i].amo}</td>
            <td>DEL</td>
        </tr>`
        i++
    
}
function rendering(){
    store.forEach(element => {
        table.innerHTML+=`<tr>
            <td>${element.desc}</td>
            <td>${element.amo}</td>
            <td>DEL</td>
        </tr>`
});

}
function delLocal(){
    localStorage.clear()
    balance.textContent=0
income.textContent=0
expense.textContent=0

}
rendering()
let totalIncome=0
let exp=0
function incomeAdd(){
    if(Number(amount.value)>0){
    totalIncome=totalIncome+Number(amount.value)
    bie[1]=totalIncome
    income.textContent=bie[1]
    localStorage.setItem("balincexp",JSON.stringify(bie))
    }
}

function expenseVisual(){
    if(Number(amount.value)<0){
       exp=exp+Number(amount.value)
       let expminus=String(exp).slice(1)
       bie[2]=Number(expminus)
       expense.textContent=bie[2]
       localStorage.setItem("balincexp",JSON.stringify(bie))
        
    }
    
}

function balanceVisual(){
    let balanceamo=totalIncome+exp
    bie[0]=balanceamo
    balance.textContent=bie[0]
    localStorage.setItem("balincexp",JSON.stringify(bie))
}
balance.textContent=bie[0]||0
income.textContent=bie[1]||0
expense.textContent=bie[2]||0












































































