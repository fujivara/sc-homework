import { OrderResponse } from './order.response';
import { ApiProperty } from '@nestjs/swagger';


export class GetCustomerOrdersResponse {
  @ApiProperty({ type: [OrderResponse] })
    orders: OrderResponse[];

  @ApiProperty()
    totalCost: number;
}
