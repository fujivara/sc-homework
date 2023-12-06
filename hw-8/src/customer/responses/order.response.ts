import { ApiProperty } from '@nestjs/swagger';


export class OrderResponse {
  @ApiProperty()
    id: number;

  @ApiProperty()
    orderAddress: string;

  @ApiProperty()
    deliveryCost: number;

  @ApiProperty()
    orderDate: string;

  @ApiProperty()
    customerId: string;

  @ApiProperty()
    employeeId: string;

  @ApiProperty()
    totalCost: number;
}