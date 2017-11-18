var mongoose = require("mongoose");
var router = require("express").Router();
var User = require("./model");

// C //
router.post("/create", (req, res) => {
    user = req.body;
    User.create(user)
        .then(user => { res.json(user); })
        .catch(err => { res.json(err); })
});

// R //
router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    })
})

// U //
router.post("/:id/update", (req, res) => {
    User.update({ _id: req.params.id }, { $set: req.body }, (err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    })
})

// D //
router.delete("/:id/delete", (req, res) => {
    User.remove({ _id: req.params.id }, (err) => {
        if (err) res.json(err);
        else res.status(200).json({ "status": "success" });
    })
})


// login //
router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
        if (err) {
            res.json(err);
        } else {
            if (user) {
                res.json(user);
            } else {
                res.json({ status: "email/password combo not found" });
            }
        }
    })
})


module.exports = router;