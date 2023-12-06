import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class OrderRepository {
  constructor (private prismaService: PrismaService) {}

  async findById (id: string) {
    return this.prismaService.order.findUnique({ where: { id } });
  }

  async delete (id: string) {
    return this.prismaService.order.delete({ where: { id } });
  }
}