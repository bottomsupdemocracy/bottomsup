const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
    issue: String, // ObjectId of issue
    user: String, // ObjectId of user
    delegateOpinion: String, // ObjectId in string form of another opinion, can be null if the voter has an opinion
    statement: { type: String, maxLength: 300 }
}, { timestamps: true });

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = Opinion;
