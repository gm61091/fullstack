
const express = require("express");
const router = express.Router();

router.get("/contact-w-sidebar", (req, res) => {
    res.render("contact-w-sidebar");
});





module.exports = router;