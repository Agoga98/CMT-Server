const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Position: String
}, {
    timestamps: true
});

const CustomerMessage = mongoose.model('User', userSchema);

module.exports = CustomerMessage;