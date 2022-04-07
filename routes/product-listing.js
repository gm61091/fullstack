
const express = require("express");
const router = express.Router();

router.get("/product-listing", (req, res) => {
    res.render("product-listing");
});





module.exports = router;