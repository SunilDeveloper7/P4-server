const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    confirmPassword: String,
    email: String,
    
});

module.exports = model('User', userSchema); 