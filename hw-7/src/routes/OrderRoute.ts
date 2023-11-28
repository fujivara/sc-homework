import express from 'express';
import { OrderController } from '../controllers/OrderController';

export const OrderRoute = express.Router();
const orderController = new OrderController();

OrderRoute.get('', orderController.getAll);
OrderRoute.post('', orderController.create);
OrderRoute.post('/:orderId/products/:productId', orderController.addProduct);
OrderRoute.delete('/:orderId', orderController.delete);
OrderRoute.delete('/:orderId/products/:productId', orderController.deleteProduct);

