
const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/menu2", async (req, res) => {
    let pizza = await findAll("pizza")
    console.log(pizza[0].dataValues.name);
    res.render("menu2", {
        pizzaArr: pizza

    });
});

const findAll = async (type) => {

    let results = await db.products.findAll({where:{type:type}})
    // console.log(products[12].dataValues.price);
    console.log(results);
    return results

}

// findAll("pizza")



module.exports = router;