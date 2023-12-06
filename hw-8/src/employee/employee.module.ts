import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository, PrismaService],
})
export class EmployeeModule {}
