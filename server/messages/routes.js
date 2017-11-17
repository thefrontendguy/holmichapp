var mongoose = require("mongoose");
var router = require("express").Router();
var Conversation = require("./model");

/*
router.get("/:id", (req, res) => {
    Conversation.findOne({ _id: req.params.id }, (err, convo) => {
        if (err) {
            res.json(err);
        } else {
            res.json(convo);
        }
    })
})
router.post("/:id/send", (req, res) => {
    Conversation.update({ _id: req.params.id }, { $set: req.body }, (err, convo) => {
        if (err) {
            res.json(err);
        } else {
            res.json(convo);
        }
    })
})*/

module.exports = router;