import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor (private orderRepository: OrderRepository) {}

  async delete (orderId: string) {
    return this.orderRepository.delete(orderId);
  }
}
