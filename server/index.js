var express = require("express");
var app = express();
var userRoutes = require("./users");
var compress = require("compression");
var secret = require("./config/keys").sessionsecret;
app.use(compress());

// set up passport
/* var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({ secret: secret }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
}); */

// set up session
var session = require('express-session');
app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: false
}));

// set up body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 3001;
app.set('port', port);

// set up a static server
app.use(express.static("build"));

app.use("/user/", userRoutes);

// set up error middleware
app.use(function (req, res) {
    res.statusCode = 404;
    res.send("Page doesn't exist");
});

// set up server
app.listen(port, () => {
    console.log("App is listening on port " + port);
});