const express = require("express")
const router = express.Router()
const cors = require("cors")

const Login = require("../models/login.model")
router.use(cors())

router.get('/login', (req, res) => {
    Login.find(function (err, login) {
        if (err) {
            res.json(err);
        }
        res.json(login);
    });
});

router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;


    let newLoginDetail = new Login();
    newLoginDetail.username = req.body.username;
    newLoginDetail.password = req.body.password;
   
    Login.find(newLoginDetail, function(err, login) {
        if (err) {
            return res.status(500).send();
        }
        if(!login){
            return res.status(400).send("Invalid Login Details");
        }
        let loginDetail = {isLoggedIn:true,username:username, password:password}
        return res.status(200).send(loginDetail);
    })
})

module.exports = router;