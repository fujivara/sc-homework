import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductRepository {
  constructor (private prismaService: PrismaService) {}

  async create (data: CreateProductDto) {
    return this.prismaService.product.create({
      data,
    });
  }
}