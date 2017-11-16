var mongoose = require("mongoose");
var Router = require("express").Router();
var User = require("./model");

Router.get("/:user", (req, res) => {
    User.findOne({ username: req.params.user }, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.json(user);
        }
    })
})

module.exports = Router;