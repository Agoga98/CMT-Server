import express from 'express'

import { getCustomers, createCustomer } from '../controllers/customer.js';

const router = express.Router();

router.get('/', getCustomers);
router.get('/', createCustomer)

export default router;