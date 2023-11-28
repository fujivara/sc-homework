import { PrismaClient } from '@prisma/client';
import { CustomerMapper } from '../mappers/CustomerMapper';

const prisma = new PrismaClient();
const customerMapper = new CustomerMapper();

export class CustomerController {

  async getOrders (req: any, res: any) {
    const { customerId } = req.params;

    try {
      const customerOrders = await prisma.customer.findUnique({
        where: {
          id: customerId,
        },
        select: {
          orders: {
            include: {
              products: {
                select: {
                  product: {
                    select: {
                      price: true,
                      amount: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      res.status(200).json({
        ...customerMapper.customerOrders(customerOrders.orders),
      });

    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }

  }

  async getAll (req: any, res: any) {
    const customers = await prisma.customer.findMany({
      include: {
        orders: true,
      },
    });
    res.status(200).json({
      ...customers,
    });
  }

  async create (req: any, res: any) {
    const { firstName, lastName, middleName, email, birthDate } = req.body;

    try {
      const customer = await prisma.customer.create({
        data: {
          firstName,
          lastName,
          middleName,
          email,
          birthDate: new Date(birthDate),
        },
      });

      res.status(201).json({
        ...customer,
      });
    } catch (error) { 
      res.status(403).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
