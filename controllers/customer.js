import CustomerMessage from '../models/customer.model.js';

export const getCustomers = async (req, res) => {
    try {
        const CustomerMessages = await CustomerMessage.find();
        
        console.log(CustomerMessages);

        res.status(200).json(CustomerMessages)
    } catch (error) {
         res.status(404).json({ message: error});
    }
}

export const createCustomer = async (req, res) => {
    const customer = req.body;
    
    const newCustomer = new CustomerMessage(customer);

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error});
    }
}
