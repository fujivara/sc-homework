import { POSITION } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
    firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
    lastName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
    middleName: string;

  @IsOptional()
  @ApiProperty()
  @IsEnum(POSITION, { message: 'Wrong position value' })
    position: POSITION;
}
