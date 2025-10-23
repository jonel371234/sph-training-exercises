import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.task.deleteMany();
  await prisma.user.deleteMany();

  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`);
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Task_id_seq" RESTART WITH 1`);

  const password1 = await bcrypt.hash('password123', 10);
  const password2 = await bcrypt.hash('secret456', 10);
  const password3 = await bcrypt.hash('mypassword789', 10);

  await prisma.user.createMany({
    data: [
      { name: 'Jonel Escaran', email: 'jonel@example.com', password: password1 },
      { name: 'Jane Doe', email: 'jane@example.com', password: password2 },
      { name: 'John Smith', email: 'john@example.com', password: password3 },
    ],
  });

  const users = await prisma.user.findMany();

  await prisma.task.createMany({
    data: [
      {
        title: 'Finish NestJS Exercise',
        description: 'Complete and test the task management API',
        status: 'pending',
        userId: users[0].id,
      },
      {
        title: 'Write Prisma Seed Script',
        description: 'Add test data for users and tasks',
        status: 'in-progress',
        userId: users[1].id,
      },
      {
        title: 'Review API Endpoints',
        description: 'Verify CRUD and filtering features',
        status: 'done',
        userId: users[2].id,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
