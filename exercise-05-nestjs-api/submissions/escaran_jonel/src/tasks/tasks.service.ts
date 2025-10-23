import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.task.create({ data });
  }

  async findAll(status?: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const where = status ? { status } : {};

    const [tasks, total] = await Promise.all([
      this.prisma.task.findMany({
        where,
        skip,
        take: limit,
        include: { user: true },
      }),
      this.prisma.task.count({ where }),
    ]);

    return {
      data: tasks,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, data) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
