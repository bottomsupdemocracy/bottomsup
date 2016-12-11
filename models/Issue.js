const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: {type: String, unique: true},
    scale: String,
    category: String,
    opinions: Array // array of Opinion ObjectIds
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
