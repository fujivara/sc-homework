import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class CustomerRepository {
  constructor (private prismaService: PrismaService) {}

  async getOrders (customerId: string) {
    return this.prismaService.customer.findUnique({
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
  }

  async findById (id: string) {
    return this.prismaService.customer.findUnique({ where: { id } });
  }
}