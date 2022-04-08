
const express = require("express");
const router = express.Router();
// const dataFile = require("../data/data.json") // json => object
// const cartItemArr = dataFile. // array of objects

router.get("/product", (req, res) => {
    res.render("product");
});





module.exports = router;