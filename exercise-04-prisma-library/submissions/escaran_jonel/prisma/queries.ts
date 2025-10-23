import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== All posts ===");
  const allPosts = await prisma.post.findMany({ include: { author: true, category: true } });
  console.log(allPosts);

  console.log("\n=== All published posts ===");
  const publishedPosts = await prisma.post.findMany({ where: { published: 1 }, include: { author: true, category: true } });
  console.log(publishedPosts);

  console.log("\n=== Posts for user 1 ===");
  const userPosts = await prisma.post.findMany({ where: { userId: 1 }, include: { author: true, category: true } });
  console.log(userPosts);

  console.log("\n=== Count posts per user ===");
  const postCounts = await prisma.user.findMany({ include: { posts: true } });
  postCounts.forEach(user => console.log(user.name, user.posts.length));

  console.log("\n=== Pagination (page 1, 2 posts per page) ===");
  const page = 1;
  const pageSize = 2;
  const paginatedPosts = await prisma.post.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: { author: true, category: true },
  });
  console.log(paginatedPosts);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());