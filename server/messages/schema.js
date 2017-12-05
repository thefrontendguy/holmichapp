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
        user: { // ID
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        route: {
            type: String,
            required: false
        }
    }]
}

module.exports = schema;