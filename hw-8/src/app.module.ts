import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CustomerModule, EmployeeModule, OrderModule, ProductModule],
})
export class AppModule {}
