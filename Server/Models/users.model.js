const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    isAdmin: Boolean
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;