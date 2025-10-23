import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword, 
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        tasks: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { tasks: true },
    });
  }

  update(id: number, data) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
