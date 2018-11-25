const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    autor: String,
    content: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAd: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tweet', tweetSchema);