# Exercise 07 – Basic Architecture: DRY, OOP, MVC (Improvement of Previous Exercises)

## Requirements
Choose one of your earlier projects (MySQL Library, React Library, Next.js Blog, NestJS API, or Prisma ORM) and **refactor/improve it** by applying these principles:

1. **DRY (Don't Repeat Yourself)** – eliminate repetitive code by extracting reusable components, services, or helper functions.
2. **OOP (Object-Oriented Programming)** – where applicable, introduce classes/objects for clearer structure (e.g., User, Book, Task, Post).
3. **MVC (Model-View-Controller)** – reorganize your code to separate:
   - **Model** – database models or data layer
   - **View** – UI or response format
   - **Controller** – logic that connects models and views

## Example Applications to Improve
- **React Library App** – extract reusable BookCard, apply DRY patterns, structure into components (View) and hooks/services (Controller/Model).
- **NestJS Task API** – refactor into proper MVC layers with services (Model), controllers (Controller), DTOs (View/Response).
- **Prisma ORM Project** – enforce DRY by moving repeated queries into repository/service classes.

## Optional Features
- Add unit tests to ensure refactored code works correctly.
- Add error handling and validations.
- Document how you applied DRY, OOP, and MVC improvements.

## Submission
- Place your improved/refactored project inside the `submissions/` folder.
- Folder name format: `lastname_firstname/`
- Example: `doe_john/`
- Include a short `REFLECTION.md` describing what improvements you applied.
```markdown