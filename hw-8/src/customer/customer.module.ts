import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerRepository } from './customer.repository';
import { CustomerMapper } from './mappers/customer.mapper';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService, CustomerRepository, CustomerMapper],
})
export class CustomerModule {}
