
const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/cart", (req, res) => {
    res.render("cart");
});


// router.get("/menu2", async (req, res) => {
//     try {
        
//         let pizza = await findAll("pizza")
//         // console.log(pizza[0].dataValues.name);
//         let pasta = await findAll("pasta")

//         let salad = await findAll("salad")

//         res.render("menu2", {
//             pizzaArr: pizza, 
//             pastaArr:pasta,
//             saladArr:salad
            
//         });
//     }
//     catch(error){


//     }
// });



module.exports = router;