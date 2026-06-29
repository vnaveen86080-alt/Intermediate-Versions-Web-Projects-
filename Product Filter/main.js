let productContainer=document.querySelector("#productContainer")

console.log(productContainer)

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
    img:"Images/img(1).jpg",
    name:"Classic Shirt",
    price:1000

}]
console.log(productDetails[0].img)
let image=document.createElement("img")

image.src=productDetails[0].img

productContainer.appendChild(image)





