import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  // Reset sequences
  await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
  await prisma.$executeRaw`ALTER SEQUENCE "Category_id_seq" RESTART WITH 1`;
  await prisma.$executeRaw`ALTER SEQUENCE "Post_id_seq" RESTART WITH 1`;

  // Create Users
  const alice = await prisma.user.create({ data: { name: "Alice", email: "alice@example.com" } });
  const bob = await prisma.user.create({ data: { name: "Bob", email: "bob@example.com" } });
  const charlie = await prisma.user.create({ data: { name: "Charlie", email: "charlie@example.com" } });

  // Create Categories
  const tech = await prisma.category.create({ data: { name: "Tech" } });
  const life = await prisma.category.create({ data: { name: "Lifestyle" } });

  // Create Posts 
  await prisma.post.createMany({
    data: [
      { title: "Post 1", content: "Content 1", published: 1, userId: alice.id, categoryId: tech.id },
      { title: "Post 2", content: "Content 2", published: 0, userId: alice.id, categoryId: life.id },
      { title: "Post 3", content: "Content 3", published: 1, userId: bob.id, categoryId: tech.id },
      { title: "Post 4", content: "Content 4", published: 1, userId: bob.id, categoryId: life.id },
      { title: "Post 5", content: "Content 5", published: 0, userId: charlie.id, categoryId: tech.id },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());