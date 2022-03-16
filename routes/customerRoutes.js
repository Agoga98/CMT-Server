const express = require('express')
const { getCustomers, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerController.js')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', protect, getCustomers)
router.post('/', protect, createCustomer)
router.put('/:id', protect, updateCustomer)
router.delete('/:id', protect, deleteCustomer)

module.exports = router;