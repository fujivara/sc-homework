import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class OrderController {
  async getAll (req: any, res: any) {
    const orders = await prisma.order.findMany({
      include: {
        products: {
          select: {
            product: true,
          },
        },
      },

    });
    res.status(200).json({
      ...orders,
    });
  }

  async create (req: any, res: any) {
    const { orderAddress, deliveryCost } = req.body;

    try {
      const order = await prisma.order.create({
        data: {
          orderAddress,
          deliveryCost,
        },
      });

      res.status(201).json({
        ...order,
      });

    } catch (error) {
      res.status(403).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async addProduct (req: any, res: any) {
    const { orderId, productId } = req.params;

    try {
      const order = await prisma.order.update({
        where: {
          id: orderId,
        },
        select: {
          products: true,
        },
        data: {
          products: {
            create: {
              productId,
            },
          },
        },
      });

      res.status(200).json({
        status: 'success',
        order,
      });

    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async delete (req: any, res: any) {
    const { orderId } = req.params; 

    try {
      const order = await prisma.order.delete({
        where: {
          id: orderId,
        },
      });

      res.status(200).json({
        ...order,
      });

    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async deleteProduct (req: any, res: any) {
    const { orderId, productId } = req.params;

    try {
      const { id } = await prisma.productsOnOrders.findFirst({
        where: {
          productId,
        },
        select: {
          id: true,
        },
      });

      await prisma.productsOnOrders.delete({
        where: {
          id,
        },
      });

      const order = await prisma.order.findUnique({
        where: {
          id: orderId,
        },
        include: {
          products: true,
        },
      });

      res.status(200).json({
        ...order,
      });

    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

}