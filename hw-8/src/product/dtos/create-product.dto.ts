import { Injectable } from '@nestjs/common';
import { CATEGORY } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


@Injectable()
export class CreateProductDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
    name: string;

  @IsEnum(CATEGORY, { message: 'Invalid product category' })
  @IsOptional()
  @ApiProperty()
    category: CATEGORY;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
    amount: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
    price: number;
}