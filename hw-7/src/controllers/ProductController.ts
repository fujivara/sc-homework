import { PrismaClient } from '@prisma/client';
import { CATEGORY } from '../utils/enums';

const prisma = new PrismaClient();

export class ProductController {

  async getAll (req: any, res: any) {
    const products = await prisma.product.findMany();
    res.status(200).json({
      status: 'success',
      products,
    });
  }

  async create (req: any, res: any) {
    const { name, category, amount, price } = req.body;

    try {
      const product = await prisma.product.create({
        data: {
          name,
          category: CATEGORY[category],
          amount,
          price,
        },
      });

      res.status(201).json({
        ...product,
      });

    } catch (error) {
      res.status(403).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}