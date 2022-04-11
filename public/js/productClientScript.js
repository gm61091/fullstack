// console.log("test"); 


// STEP: useritemchoice is object user chooses to add to cart to add to local storage
let userItemChoice = {};


// localStorage.orderArr = JSON.stringify

//grab product name from dom

let productName = document.querySelector(".vincent_single_product_title").innerText;
// console.log(productName);


//grab price from dom
let price = document.querySelector(".vincent_single_product_price").innerText.slice(1)

price = parseFloat(price);

// console.log(price);

//get desciption from dom

let description = document.querySelector(".description").innerText;
// console.log(description);


//add name and price to userItemChoice

userItemChoice.name= productName
userItemChoice.price = price
userItemChoice.description = description
// console.log(userItemChoice);
//grab button element from dom
let buttonClick = document.querySelector(".vincent_button");

//put event listener on that element
buttonClick.addEventListener("click", (e)=> {
    e.preventDefault()

    if (localStorage.orderArr)  {
        //creqte temp arr and set = to order arr after parsing           arr = JSON.parse(localStorage.array)  //convert JSON string to JS object
        
        let tempArr = JSON.parse(localStorage.orderArr)
        console.log(tempArr);
        // console.log(tempPrice);
        //push new item choice to temp arr

        tempArr.push(userItemChoice)
        console.log(tempArr);
        //stringify temp arr and set = to orser arr on local storage

        localStorage.orderArr = JSON.stringify(tempArr)
        console.log(localStorage.orderArr);

        console.log("code is running");
        let tempPrice = parseFloat(localStorage.orderPrice) //price = parseFloat(price);

        // add new item price to total price
        tempPrice = tempPrice + userItemChoice.price
       // ??  tempPrice += userItemChoice.price BOTH options work line 62 is just shorter

        // set orderPrice on localStorage to tempPrice
        localStorage.orderPrice = tempPrice
        console.log(localStorage.orderPrice);
    } else {
        //put user item choice in arr and set equal to order arr on local storage
        let arr = [userItemChoice]
        // console.log(localStorage);
        localStorage.orderArr = JSON.stringify(arr)  //converst object to JSON string
        localStorage.orderPrice = userItemChoice.price 
    }
    
    // console.log("test2");
})
// console.log(userItemChoice);
// localStorage.clear()
// console.log(localStorage.orderPrice);// //converst object to JSON string

// console.log(localStorage);
//use event listener to find the target (e.target or somethiong like that) <---



//event object will allow yuou to target which item was clicked


//take old value and append new items to the array and add the arrray to local storage
