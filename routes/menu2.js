
const express = require("express");
const router = express.Router();
const db = require('../models');


router.get("/menu2", async (req, res) => {
    try {
        
        let pizza = await findAll("pizza")
        // console.log(pizza[0].dataValues.name);
        let pasta = await findAll("pasta")

        let salad = await findAll("salad")

        res.render("menu2.ejs", {
            pizzaArr: pizza, 
            pastaArr:pasta,
            saladArr:salad
            
        });
    }
    catch(error){


    }
});

const findAll = async (type) => {

    let results = await db.products.findAll({where:{type:type}})
    // console.log(products[12].dataValues.price);
    console.log(results);
    return results

}

// findAll("pizza")



module.exports = router;