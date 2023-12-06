import { PipeTransform, Injectable } from '@nestjs/common';
import { CustomerRepository } from '../customer.repository';
import { NotFoundException } from '../../exceptions/not-found.exception';

@Injectable()
export class CustomerByIdPipe implements PipeTransform {
  constructor (private customerRepository: CustomerRepository) {}

  async transform (customerId: string) {
    const customer = await this.customerRepository.findById(customerId);
    if (!customer) {
      throw new NotFoundException('Wrong customer id');
    }
    return customerId;
  }
}

