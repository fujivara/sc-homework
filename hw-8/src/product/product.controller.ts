import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { ApiFoundResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductResponse } from './responses/product.response';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor (private productService: ProductService) {}

  @ApiOperation({ summary: 'Create a product' })
  @ApiResponse({ status: 201, type: ProductResponse })
  @ApiFoundResponse({ status: 403, description: 'Invalid product category' })
  @Post()
  async create (@Body(ValidationPipe) createProductDto: CreateProductDto): Promise<ProductResponse> {
    return this.productService.create(createProductDto);
  }
}
