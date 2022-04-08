
const express = require("express");
const router = express.Router();
const db = require('../models');


// const dataFile = require("../data/data.json") // json => object
// const cartItemArr = dataFile. // array of objects

// localhost:3000/product/12

router.get("/product/:ID", async (req, res) => {
    try {

        let dataID = req.params.ID;
        // console.log(dataID);

        let results = await db.products.findByPk(dataID)
        console.log(results);
        
        res.render("product", {
        
            results: results, 

        });
    }
    catch(error){
        console.log(error);
    }
    });

// app.get('/data/:city', (req, res)=>{

//     let city = req.params.city;
//     console.log(req.params);

//     res.send(`<h1>I live in ${city}</h1>`)
// })

// res.render("menu2", {
//     pizzaArr: pizza, 
//     pastaArr:pasta,
//     saladArr:salad
    
// });



module.exports = router;