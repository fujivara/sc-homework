import express from 'express';
import { ProductController } from '../controllers/ProductController';

export const ProductRoute = express.Router();
const productController =  new ProductController();

ProductRoute.get('', productController.getAll);
ProductRoute.post('', productController.create);
