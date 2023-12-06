import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor (private employeeRepository: EmployeeRepository) {}

  async update (employeeId: string, data: UpdateEmployeeDto) {
    return this.employeeRepository.update(employeeId, data);
  }

}
