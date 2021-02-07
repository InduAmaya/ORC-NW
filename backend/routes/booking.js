const express = require("express")
const router = express.Router()
const cors = require("cors")

const Booking = require("../models/booking.model")
router.use(cors())

router.get('/booking', (req, res) => {
    Booking.find({}, function (err, booking) {
        if (err) {
            res.json(err);
        }
        res.json(booking);
    });
});

/*
router.get('/user/:id', function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
        // let user1 = new User ({
        //     name: user.name,
        //     email: user.email
        // })
        // res.json(user1);
    });
});
*/

router.post('/booking', function (req, res) {
    let booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        days: req.body.days,
        participants: req.body.participants,
    })
    
    booking.save()
        .then(() => {
            res.status(200).send('User Added Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to Database");
        });
});

module.exports = router;