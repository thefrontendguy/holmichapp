var router = require("express").Router();
var User = require("./model");
var bcrypt = require("bcrypt");

// C //
router.post("/create", (req, res) => {
    user = req.body;
    bcrypt.hash(user.password, 8, (err, hash) => {
        if (err) {
            res.status(500).json(err);
        }
        user.password = hash;
        User.create(user)
            .then(user => { user.password = undefined; res.status(200).json(user); })
            .catch(err => { res.status(500).json(err); })
    })
});

// R //
router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else {
            user.password = undefined;
            res.status(200).json(user);
        }
    })
})

// U //
router.post("/:id/update", (req, res) => {
    var user = req.body;
    if (user.password) {
        bcrypt.hash(user.password, 8, (err, hash) => {
            if (err) {
                res.status(500).json(err);
            } else {
                user.password = hash;
                User.update({ _id: req.params.id }, { $set: user }, (err, response) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(response);
                    }
                })
            }
        })
    } else {
        User.update({ _id: req.params.id }, { $set: user }, (err, response) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response);
            }
        })
    }
})

// D //
router.delete("/:id/delete", (req, res) => {
    User.remove({ _id: req.params.id }, (err) => {
        if (err) res.status(500).json(err);
        else res.status(200).json({ "status": "success" });
    })
})

// login //
router.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email: email }, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then((result) => {
                        if (result) { user.password = undefined; res.status(200).json(user); }
                        else res.status(404).json({ status: "email/password combo not found" });
                    })
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(404).json({ status: "email/password combo not found" });
            }
        }
    })
})


module.exports = router;