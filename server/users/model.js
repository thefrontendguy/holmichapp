var db = require("../config/database");
var mongoose = require("mongoose");
var schema = require("./schema");

db.startDB();
var User = mongoose.model("User", schema);

/*User.create({
    username: "cahit",
    password: "password",
    email: "email@this.address"
}).then(user => {
    console.log(user);
})
    .catch((err) => { console.log("error" + err) })*/

module.exports = User;
