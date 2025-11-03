## Improvements Applied

### DRY (Don't Repeat Yourself)
- Extracted reusable components such as `BookCardItem`, `Table`, and `SearchInput`.
- Centralized book and member data operations inside `BookService` and `MemberService`.
- Removed repeated filtering logic by delegating to service methods.

### OOP (Object-Oriented Programming)
- Introduced `Book` and `Member` classes to represent domain entities.
- Added class methods like `getBorrowedBooks()` and `getReturnedBooks()` for encapsulated logic.

### MVC Structure
- **Model:** `models/` and `data/` define domain structure and seed data.
- **View:** `components/` folder handles UI rendering.
- **Controller:** `services/` manages logic and acts as a bridge between data and UI.

### Result
This refactor made the project cleaner, more maintainable, and easier to extend 
