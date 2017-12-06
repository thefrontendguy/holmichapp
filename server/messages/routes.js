var mongoose = require("mongoose");
var router = require("express").Router();
var Conversation = require("./model");
var User = require("../users/model");

var hosturl = process.env.hosturl || "http://localhost:3000";
router.post("/create", (req, res) => {
    var convo = req.body;
    var msg = convo.messages[0];
    if (!msg.date) convo.messages[0].date = Date.now();
    if (msg.origin) {
        msg.route = `${hosturl}/route/${msg.origin.lat}/${msg.origin.lng}/${msg.destination.lat}/${msg.destination.lng}/${msg.reqdate}/`
        msg.origin = undefined; msg.destination = undefined; msg.reqdate = undefined;
        convo.messages[0] = msg;
    }
    Conversation.create(convo)
        .then(convo => {
            res.status(200).json(convo);
            var ids = [convo.user1, convo.user2];
            User.update({ _id: { "$in": ids } },
                { "$push": { conversations: { conversation: convo._id } } },
                { multi: true },
                (err, response) => { console.log(err || response) })
        })
        .catch(err => { res.status(500).json(err); })

});

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
    var msg = req.body;
    var user2 = null;
    Conversation.findOne({ _id: req.params.id }, (err, convo) => {
        if (err) {
            res.json(err);
        } else if (convo.user2 == "socialmedia") {
            user2 = msg.user;
            if (!msg.date) msg.date = Date.now();
            if (msg.origin) {
                msg.route = `${hosturl}/route/${msg.origin.lat}/${msg.origin.lng}/${msg.destination.lat}/${msg.destination.lng}/${msg.reqdate}/`
                msg.origin = undefined; msg.destination = undefined; msg.reqdate = undefined;
            }
            var update = user2 ?
                { "$set": { user2: user2 }, "$push": { messages: msg } } :
                { "$push": { messages: msg } };
            Conversation.update({ _id: req.params.id }, update, { multi: true }, (err, convo) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(convo);
                }
            })
        }
    })
})

module.exports = router;