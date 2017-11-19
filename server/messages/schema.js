var bcrypt = require('bcrypt');

var schema = {
    user1: { // ID
        type: String,
        required: true
    },
    user2: { // ID
        type: String,
        required: true
    },

    messages: [{
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }]
}

schema.pre('create', next => {
    var user = this;
    bcrypt.hash(user.password, 8, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

schema.statics.authenticate = (email, password, callback) => {
    User.findOne({ email: email })
        .exec((err, user) => {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

module.exports = schema;