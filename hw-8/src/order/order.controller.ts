import { Controller, Delete, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderByIdPipe } from './pipes/order-by-id.pipe';
import { ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderResponse } from './responses/order.response';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor (private orderService: OrderService) {}

  @ApiOperation({ summary: 'Delete specific order' })
  @ApiResponse({ status: 200, type: OrderResponse })
  @ApiNotFoundResponse({ status: 404, description: 'Wrong employee id' })
  @Delete('/:orderId')
  async delete (@Param('orderId', OrderByIdPipe) orderId: string): Promise<OrderResponse> {
    return this.orderService.delete(orderId);
  }
}
