const mongoose = require("mongoose");
const schema = mongoose.Schema;

// creating user schema & model
const UserSchema = new schema({
    firstname: {
        type: String,
        required: [true]
    },
    lastname: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true]
    },
    dob: {
        type: String,
        required: [true]
    },
    bio: {
        type: String,
        required: [true]
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;