export const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isBorrowed: false, isOverdue: false },
  { id: 2, title: "Tender Is the Night", author: "F. Scott Fitzgerald", isBorrowed: true, isOverdue: true },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: true, isOverdue: true },
  { id: 4, title: "Go Set a Watchman", author: "Harper Lee", isBorrowed: false, isOverdue: false },
  { id: 5, title: "1984", author: "George Orwell", isBorrowed: false, isOverdue: false },
  { id: 6, title: "Animal Farm", author: "George Orwell", isBorrowed: true, isOverdue: false },
  { id: 7, title: "Pride and Prejudice", author: "Jane Austen", isBorrowed: true, isOverdue: true },
  { id: 8, title: "Sense and Sensibility", author: "Jane Austen", isBorrowed: false, isOverdue: false },
  { id: 9, title: "The Catcher in the Rye", author: "J.D. Salinger", isBorrowed: true, isOverdue: false },
  { id: 10, title: "Franny and Zooey", author: "J.D. Salinger", isBorrowed: true, isOverdue: false },
];

export const membersData = [
  {
    id: 1,
    name: "Alice Johnson",
    history: [
      { title: "Tender Is the Night", returned: false }, 
      { title: "The Great Gatsby", returned: true }, 
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    history: [
      { title: "Pride and Prejudice", returned: false }, 
      { title: "Franny and Zooey", returned: false }, 
    ],
  },
  {
    id: 3,
    name: "Catherine Lee",
    history: [
      { title: "Animal Farm", returned: false },
      { title: "The Catcher in the Rye", returned: true },
    ],
  },
  {
    id: 4,
    name: "David Kim",
    history: [
      { title: "Go Set a Watchman", returned: true },
      { title: "1984", returned: true }, 
      { title: "Sense and Sensibility", returned: false }, 
    ],
  },
  {
    id: 5,
    name: "Emma Watson",
    history: [
      { title: "To Kill a Mockingbird", returned: false }, 
      { title: "1984", returned: true }, 
    ],
  },
  {
    id: 6,
    name: "Harry Poter",
    history: [
      { title: "The Catcher in the Rye", returned: false }, 
    ],
  },
];
