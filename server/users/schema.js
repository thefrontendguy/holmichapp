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
        id: {
            type: String,
            required: false
        },
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
    conversations: [{
        conversation: { // _id
            type: String,
            required: true
        },
        user: { // _id
            type: String,
            required: false
        }
    }],
    locations: [{
        name: {
            type: String,
            required: true
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }]
}

module.exports = schema;