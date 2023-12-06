import { ApiProperty } from '@nestjs/swagger';

export class OrderResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    customerId: string;

  @ApiProperty()
    employeeId: string;

  @ApiProperty()
    orderAddress: string;

  @ApiProperty()
    deliveryCost: number;

  @ApiProperty()
    orderDate: Date;
}
