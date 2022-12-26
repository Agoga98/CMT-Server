const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    CustomerID: String,
    LastName: String,
    FirstName: String,
    Birthday: Date,
    Email: String,
    TelNum: String,
    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String,
  },
  {
    timestamps: true,
  }
);

const CustomerMessage = mongoose.model("Customer", customerSchema);

module.exports = CustomerMessage;
