# Exercise 06 – ER Diagram: Design a Database Schema

## Requirements
- Design an Entity-Relationship (ER) Diagram for an **Online Course Platform**.
- Entities (minimum):
  1. Student (id, name, email)
  2. Course (id, title, description)
  3. Instructor (id, name, email)
  4. Enrollment (studentId, courseId, enrollmentDate)
- Relationships:
  - A student can enroll in many courses.
  - A course can have many students.
  - A course is taught by one instructor.

## Optional Features
- Add a `Category` entity to classify courses.
- Add a `Review` entity for students to leave feedback on courses.
- Show cardinalities (1:N, M:N, etc.) clearly.

## Submission
- Draw the ER Diagram using any tool (dbdiagram.io, Lucidchart, Draw.io, etc.).
- Export the diagram as **.png** or **.pdf**.
- Place the file inside the `submissions/` folder.
- File name format: `lastname_firstname.png` or `lastname_firstname.pdf`
- Example: `doe_john.png`