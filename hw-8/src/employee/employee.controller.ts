import { Body, Controller, Param, Patch, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';
import { EmployeeByIdPipe } from './pipes/employee-by-id.pipe';
import { ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeResponse } from './responses/employee.response';

@ApiTags('employee')
@Controller('/employee')
export class EmployeeController {
  constructor (private employeeService: EmployeeService) {}

  @ApiOperation({ summary: 'Update specific employee' })
  @ApiResponse({ status: 200, type: EmployeeResponse })
  @ApiNotFoundResponse({ status: 404, description: 'Wrong employee id' })
  @Patch('/:employeeId')
  async update (
    @Param('employeeId', EmployeeByIdPipe) employeeId: string,
    @Body(ValidationPipe) updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeResponse> {
    return this.employeeService.update(employeeId, updateEmployeeDto);
  }
}
