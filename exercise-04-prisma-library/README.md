# Exercise 04 – Prisma ORM: User & Post Management

## Requirements
- Use Prisma ORM with SQLite or PostgreSQL.
- Define models:
  1. User (id, name, email)
  2. Post (id, title, content, published, userId)
- Features:
  - Migrate the schema to the database.
  - Seed the database with at least 3 users and 5 posts.
  - Queries:
    - Get all posts with their authors.
    - Get all published posts.
    - Get posts for a specific user.
    - Count how many posts each user has.

## Optional Features
- Add a `Category` model and link it to posts.
- Add filtering by category or published status.
- Add pagination for listing posts.

## Submission
- Place your Prisma project inside the `submissions/` folder.
- Folder name format: `lastname_firstname/`
- Example: `doe_john/`