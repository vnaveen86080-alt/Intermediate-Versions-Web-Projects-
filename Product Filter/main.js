let productContainer=document.querySelector("#productContainer")

console.log(productContainer)

let sortSelect=document.querySelector("#sortSelect")

//class

// class Products{
//     constructor(pic,name,price){
//         this.pic=pic
//         this.name=name
//         this.price=price
//     }
// }

// Classic White Shirt
// Slim Fit Oxford Shirt
// Casual Denim Shirt
// Checked Flannel Shirt
// Striped Cotton Shirt
// Linen Summer Shirt
// Printed Hawaiian Shirt
// Black Formal Shirt
// Polo T-Shirt
// Henley T-Shirt

let productDetails=[{
    img:"Images/img(1) .jpg",
    name:"Classic Shirt",
    price:500

},
{
    img:"Images/img(2) .jpg",
    name:"Slim Fit Oxford Shirt",
    price:1000
},
{
     img:"Images/img(3) .jpg",
    name:"Casual Denim Shirt",
    price:200
},
{
     img:"Images/img(4) .jpg",
    name:"Checked Flannel Shirt",
    price:1500
},
{
    img:"Images/img(5) .jpg",
    name:"Striped Cotton Shirt",
    price:3500
},
{
    img:"Images/img(6) .jpg",
    name:"Linen Summer Shirt",
    price:1600
}
,
{
    img:"Images/img(7) .jpg",
    name:"Printed Hawaiian Shirt",
    price:1100
},
{
    img:"Images/img(8) .jpg",
    name:"/ Black Formal Shirt",
    price:600
},
{
    img:"Images/img(9) .jpg",
    name:"Polo T-Shirt",
    price:170
},
{
    img:"Images/img(10) .jpg",
    name:"Henley T-Shirt",
    price:700
}]

productDetails.forEach(element => {
         let productimgContainer=document.createElement("div")
         let priceTag=document.createElement("p")
         let productImg=document.createElement("img")
         productImg.src=element.img
         priceTag.textContent=element.price
         priceTag.classList.add("priceTag")
         productimgContainer.appendChild(productImg)
         productimgContainer.appendChild(priceTag) 
         productContainer.appendChild(productimgContainer)
     })

    //  sorting

sortSelect.addEventListener("change",()=>{
    let c=sortSelect.value
    console.log(c)
    if(sortSelect.value=="low to high"){
        productDetails.sort((a,b)=>{
           return a.price-b.price
           
}  
)}
    else if(sortSelect.value=="high to low"){
productDetails.sort((a,b)=>{
           return b.price-a.price
           
}  

 ) }
productContainer.innerHTML=""
productDetails.forEach(element => {
         let productimgContainer=document.createElement("div")
         let priceTag=document.createElement("p")
         let productImg=document.createElement("img")
         productImg.src=element.img
         priceTag.textContent=element.price
         priceTag.classList.add("priceTag")
         productimgContainer.appendChild(productImg)
         productimgContainer.appendChild(priceTag) 
         productContainer.appendChild(productimgContainer)
     })
    }
    
   
)



