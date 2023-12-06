
import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from '../order.repository';
import { NotFoundException } from '../../exceptions/not-found.exception';

@Injectable()
export class OrderByIdPipe implements PipeTransform {
  constructor (private orderRepository: OrderRepository) {}

  async transform (orderId: string) {
    const order = await this.orderRepository.findById(orderId);
    if (!order) {
      throw new NotFoundException('Wrong order id');
    }
    return orderId;
  }
}



