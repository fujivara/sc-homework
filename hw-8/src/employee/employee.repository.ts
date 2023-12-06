import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';


@Injectable()
export class EmployeeRepository {
  constructor (private prismaService: PrismaService) {}

  async update (id: string, data: UpdateEmployeeDto) {
    return this.prismaService.employee.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async findById (id: string) {
    return this.prismaService.employee.findUnique({ where: { id } });
  }
}