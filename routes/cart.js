
const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/cart", (req, res) => {
    res.render("cart");
});





module.exports = router;