const mongoose = require('mongoose');

const TodolistSchema = new mongoose.Schema({
    title: String,
    note: String,
    location: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todolist', TodolistSchema)
