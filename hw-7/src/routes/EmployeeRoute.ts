import express from 'express';
import { EmployeeController } from '../controllers/EmployeeController';
import { CustomerRoute } from './CustomerRoute';

const employeeController = new EmployeeController();
export const EmployeeRoute = express.Router();

EmployeeRoute.get('', employeeController.getAll);
EmployeeRoute.post('', employeeController.create);
EmployeeRoute.patch('/:id', employeeController.update);
