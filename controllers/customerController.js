const asyncHandler = require("express-async-handler");
const customerModel = require("../models/customer.model.js");

// @desc Get customer
// @route GET /api/customer
// @access Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await customerModel.find();

  res.status(200).json(customers);
});

// @desc Create customer
// @route POST /api/customer/
// @access Private
const createCustomer = asyncHandler(async (req, res) => {
  const requiredFields = [
    "CustomerID",
    "LastName",
    "FirstName",
    "Birthday",
    "Email",
    "TelNum",
    "Adress",
    "PostalCode",
    "City",
    "Country",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    res.status(400);
    throw new Error(
      `Please add the following required fields: ${missingFields.join(", ")}.`
    );
  }

  const { LastName, FirstName, Birthday } = req.body;

  //Check if customer exists
  const customerExists = await customerModel.findOne({
    LastName,
    FirstName,
    Birthday,
  });

  if (customerExists != null) {
    res.status(400);
    throw new Error("Customer already exists");
  }

  const newCustomer = await customerModel.create(req.body);

  res
    .status(201)
    .json({ newCustomer, message: "Kunde wurde erfolgreich hinzugefügt" });
});

// @desc Create customer
// @route PUT /api/customer/:id
// @access Private
const updateCustomer = asyncHandler(async (req, res) => {
  const updateCustomer = await customerModel.findById(req.params.id);

  try {
    if (updateCustomer != null) {
      //geänderte Kundendaten werden übernommen
      Object.assign(updateCustomer, req.body);

      await updateCustomer.save();

      res.status(201).json(updateCustomer);
    } else {
      res
        .status(404)
        .json({ message: "Kunden mit dieser ID existiert nicht!" });
    }
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
});

// @desc delete customer
// @route Delete /api/customer
// @access Private
const deleteCustomer = asyncHandler(async (req, res) => {
  try {
    const deletedDocument = await customerModel.findByIdAndDelete(
      req.params.id
    );

    res.status(201).json({
      deletedDocument,
      message:
        "Der der Kunde mit der ID: " +
        req.params.id +
        "wurde erfolgreich gelöscht",
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
});

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
