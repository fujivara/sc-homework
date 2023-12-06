import { POSITION } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    firstName: string;

  @ApiProperty()
    lastName: string;

  @ApiProperty()
    middleName: string;

  @ApiProperty()
    position: POSITION;
}