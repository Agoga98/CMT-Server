import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
    CustomerID: String,
    LastName: String,
    FristName: String,
    Birthday: Date,
    Email: String,
    TelNum: String,
    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String
});

const CustomerMessage = mongoose.model('Customer', customerSchema);

export default CustomerMessage;