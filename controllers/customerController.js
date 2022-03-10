const asyncHandler = require('express-async-handler')
const CustomerMessage =  require('../models/customer.model.js')

// @desc Get customer
// @route GET /api/customer
// @access Private
const getCustomers = asyncHandler( async (req, res) => {
    try {
        const CustomerMessages = await CustomerMessage.find();
        
        console.log(CustomerMessages);

        res.status(200).json(CustomerMessages)
    } catch (error) {
         res.status(404).json({ message: error});
    }
})

// @desc Create customer
// @route POST /api/customer/:id
// @access Private
const createCustomer = asyncHandler( async (req, res) => {
    const customer = req.body;
    
    const newCustomer = new CustomerMessage(customer);

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error});
    }
})

// @desc Create customer
// @route PUT /api/customer/:id
// @access Private
const updateCustomer = asyncHandler( async (req, res) => {
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
