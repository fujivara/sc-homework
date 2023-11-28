import { CustomerRoute } from './routes/CustomerRoute';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { EmployeeRoute } from './routes/EmployeeRoute';
import { ProductRoute } from './routes/ProductRoute';
import { OrderRoute } from './routes/OrderRoute';
import customerDoc from './swagger/customer.json';
import componentsDoc from './swagger/components.json';
import employeeDoc from './swagger/employee.json';
import orderDoc from './swagger/order.json';
import productDoc from './swagger/product.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup({
  openapi: '3.0.3',
  info: {
    title: 'Supermarket api',
  },
  tags: {
    name: ['Customer', 'Employee'],
  },
  paths: {
    ...customerDoc,
    ...employeeDoc,
    ...orderDoc,
    ...productDoc,
  },
  components: {
    ...componentsDoc,
  },

}));

app.use('/api/customers', CustomerRoute);
app.use('/api/employees', EmployeeRoute);
app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

const port = 3000;
app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`),
);
