var schema = {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contacts: [{
        name: {
            type: String,
            required: true
        },
        phonenumber: {
            type: Number,
            required: false
        },
        email: {
            type: String,
            required: false
        }
    }],
    messages: [{
        id: {
            type: String,
            required: true
        },
        user: { // _id
            type: String,
            required: true
        }
    }],
    home: {
        lat: {
            type: Number,
            required: false
        },
        long: {
            type: Number,
            required: false
        }
    },
    work: {
        lat: {
            type: Number,
            required: false
        },
        long: {
            type: Number,
            required: false
        }
    }
}

module.exports = schema;