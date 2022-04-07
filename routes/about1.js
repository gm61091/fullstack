
const express = require("express");
const router = express.Router();

router.get("/about1", (req, res) => {
    res.render("about1");
});





module.exports = router;