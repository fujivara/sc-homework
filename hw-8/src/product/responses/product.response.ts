import { CATEGORY } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    name: string;

  @ApiProperty()
    category: CATEGORY;

  @ApiProperty()
    amount: number;

  @ApiProperty()
    price: number;
}