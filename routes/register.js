const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require("../models");

router.get("/register", (req, res) => {
    res.render("register", {
        error: ""
    })
})


router.post("/register", async (req, res) => {

    try{
        let {firstName, lastName,email, password} = req.body;

        password = bcrypt.hashSync(password, 8);

        let emailCheck = await db.users.findAll({where: {email: email}})
        
        if(emailCheck.length > 0){
            res.render('register', {
                error: 'that email exists already'
            })
        }
        else{

        

            let insertRecord = await db.users.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password

                })
                res.redirect('/login')
        }
        // res.redirect('/login')
    }
    catch (error) {
        console.log(error);

        res.render('register', {
            error: "you messed up somewhere"
        })
    }
});

// app.get("/register", (req, res) => {
//     res.render("register");
// });

// app.post("/register", (req, res) => {
//     let firstName = req.body.firstName
//     let lastName = req.body.lastName
//     let email = req.body.email
//     let password = req.body.password
// });



module.exports = router;