import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor (private customerRepository: CustomerRepository) {}

  async getOrders (customerId) {
    return this.customerRepository.getOrders(customerId);
  }

}
