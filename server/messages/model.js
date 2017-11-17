var db = require("../config/database");
var mongoose = require("mongoose");
var Conversation = require("./schema");

db.startDB();
var Conversation = mongoose.model("Conversation", schema);

/*Conversation.create({
    user1: "5a0dc39b2af8a80f11f5c6c1",
    user2: "5a0dc3c65bab880f50a667a5",
    messages: [
        {
            content: "Hello",
            date: Date.now()
        },
        {
            content: "Hello to you too",
            date: Date.now()
        }
    ]
}).then(user => {
    console.log(user);
})
    .catch((err) => { console.log("error" + err) })*/

module.exports = Conversation;
