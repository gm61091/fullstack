
const express = require("express");
const router = express.Router();

router.get("/single-product", (req, res) => {
    res.render("single-product");
});





module.exports = router;