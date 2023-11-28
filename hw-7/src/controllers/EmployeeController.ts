import { PrismaClient } from '@prisma/client';
import { POSITION } from '../utils/enums';

const prisma = new PrismaClient();

export class EmployeeController {
  async getAll (req: any, res: any) {
    const employees = await prisma.employee.findMany({
      include: {
        orders: true,
      },
    });
    res.status(200).json({
      ...employees,
    });
  }

  async create (req: any, res: any) {
    const { firstName, lastName, middleName, position } = req.body;

    try {
      const employee = await prisma.employee.create({
        data: {
          firstName,
          lastName,
          middleName,
          position: POSITION[position],
        },
      });

      res.status(201).json({
        ...employee,
      });

    } catch (error) {
      res.status(403).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async update (req: any, res: any) {
    const { firstName, lastName, middleName, position } = req.body;
    const { id } = req.params;

    try {
      const employee = await prisma.employee.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          middleName,
          position: POSITION[position],
        },
      });

      res.status(200).json({
        ...employee,
      });

    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

}