import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerByIdPipe } from './pipes/customer-by-id.pipe';
import { CustomerMapper } from './mappers/customer.mapper';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetCustomerOrdersResponse } from './responses/get-customer-orders.response';

@ApiTags('customer')
@Controller('/customer')
export class CustomerController {
  constructor (
    private customerService: CustomerService,
    private customerMapper: CustomerMapper
  ) {}

  @ApiOperation({ summary: 'Get customer orders' })
  @ApiResponse({ status: 200, type: GetCustomerOrdersResponse })
  @ApiNotFoundResponse({ status: 404, description: 'Wrong customer id' })
  @Get('/:customerId')
  async getOrders (@Param('customerId', CustomerByIdPipe) customerId: string): Promise<GetCustomerOrdersResponse> {
    const orders = await this.customerService.getOrders(customerId);
    return this.customerMapper.customerOrders(orders.orders);
  }
}
