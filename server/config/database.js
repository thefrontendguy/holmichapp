var mongoose = require("mongoose");
var connectionString = process.env.connectionstring;

module.exports = {
    database: connectionString,
    startDB: function () {
        //to get rid of annoying promise/deprecated warnings
        mongoose.Promise = global.Promise;
        mongoose.connect(this.database, { useMongoClient: true });
        db = mongoose.connection;

        db.once("open", () => {
            console.log("Connected to mongodb");
        });

        db.on("error", (error) => {
            console.log(error);
        });
    }
}