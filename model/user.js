const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    age: {
        type: Number
    },
    sex: {
        type: Number
    },
    email: {
        type: String
    },
    hobbies: {
        type: [String]
    },
    collage: {
        type: String
    },
    enterDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);