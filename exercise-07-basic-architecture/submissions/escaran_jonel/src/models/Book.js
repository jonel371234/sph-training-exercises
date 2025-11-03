export default class Book {
  constructor({ id, title, author, isBorrowed, isOverdue }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = isBorrowed;
    this.isOverdue = isOverdue;
  }

  getStatus() {
    if (this.isOverdue) return "Overdue";
    if (this.isBorrowed) return "Borrowed";
    return "Available";
  }
}
