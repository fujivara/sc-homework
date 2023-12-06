import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor (private productRepository: ProductRepository) {}

  async create (data: CreateProductDto) {
    return this.productRepository.create(data);
  }
}
