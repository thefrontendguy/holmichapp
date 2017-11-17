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

module.exports = schema;