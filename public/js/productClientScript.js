// console.log("test"); 


//useritemchoice is object user chooses to add to cart to add to local storage
let userItemChoice = {}


localStorage.orderArr = JSON.stringify

//grab product name from dom

let productName = document.querySelector(".vincent_single_product_title").innerText;
console.log(productName);


//grab price from dom
let price = document.querySelector(".vincent_single_product_price").innerText.slice(1)

price = parseFloat(price);

console.log(price);

//get desciption from dom

let description = document.querySelector(".description").innerText;
console.log(description);


//add name and price to userItemChoice

userItemChoice.name= productName
userItemChoice.price = price
userItemChoice.description = description
console.log(userItemChoice);
//grab button element from dom
let buttonClick = document.querySelector(".vincent_button");

//put event listener on that element
buttonClick.addEventListener("click", (e)=> {
    e.preventDefault()




    // console.log("test2");
})


//use event listener to find the target (e.target or somethiong like that) <---



//event object will allow yuou to target which item was clicked


//take old value and append new items to the array and add the arrray to local storage
