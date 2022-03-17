const asyncHandler = require('express-async-handler')
const customerModel =  require('../models/customer.model.js')

// @desc Get customer
// @route GET /api/customer
// @access Private
const getCustomers = asyncHandler( async (req, res) => {
    const customers = await customerModel.find();

    res.status(200).json(customers)
})

// @desc Create customer
// @route POST /api/customer/
// @access Private
const createCustomer = asyncHandler( async (req, res) => {
    const {CustomerID, LastName, FirstName, Birthday, Email, TelNum, Adress, PostalCode, City, Country} = req.body
    
    if(!CustomerID || !LastName || !FirstName || !Birthday || !Email || !TelNum || !Adress || !PostalCode || !City || !Country){
        res.status(400)
        throw new Error('Please add json object from type Customer in the Body.')
    }

    //Check if user exists
    const customerExists = await customerModel.findOne({LastName, FirstName, Birthday})

    if(customerExists)
    {
        res.status(400)
        throw new Error('Customer already exists')
    }

    const newCustomer = await customerModel.create(req.body)

    res.status(201).json({message: 'Kunden wurde erfolgreich hinzugefügt'})
})

// @desc Create customer
// @route PUT /api/customer/:id
// @access Private
const updateCustomer = asyncHandler( async (req, res) => {
    //ToDO: .....
    const customer = req.body;
    
    const newCustomer = new CustomerMessage(customer);

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error});
    }
})

// @desc delete customer
// @route Delete /api/customer
// @access Private
const deleteCustomer = asyncHandler( async (req, res) => {
    //ToDO: .....
    const customer = req.body;
    
    const newCustomer = new CustomerMessage(customer);

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error});
    }
})

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
}
