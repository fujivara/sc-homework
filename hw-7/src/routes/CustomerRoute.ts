import { CustomerController } from '../controllers/CustomerController';
import express from 'express';

const customerController = new CustomerController();

export const CustomerRoute = express.Router();

CustomerRoute.get('', customerController.getAll);
CustomerRoute.post('', customerController.create);
CustomerRoute.get('/:customerId/orders', customerController.getOrders);

