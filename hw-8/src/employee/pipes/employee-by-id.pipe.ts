import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../employee.repository';
import { NotFoundException } from '../../exceptions/not-found.exception';

@Injectable()
export class EmployeeByIdPipe implements PipeTransform {
  constructor (private employeeRepository: EmployeeRepository) {}

  async transform (employeeId: string) {
    const employee = await this.employeeRepository.findById(employeeId);
    if (!employee) {
      throw new NotFoundException('Wrong employee id');
    }
    return employeeId;
  }
}

