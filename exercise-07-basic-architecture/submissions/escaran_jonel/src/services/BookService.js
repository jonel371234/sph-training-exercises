import { booksData } from "../data/data";

export const BookService = {
  getAllBooks() {
    return booksData;
  },

  getBookById(id) {
    return booksData.find((book) => book.id === id);
  },

  getBookByTitle(title) {
    return booksData.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  },

  getBorrowedBooks() {
    return booksData.filter((book) => book.isBorrowed);
  },

  getAvailableBooks() {
    return booksData.filter((book) => !book.isBorrowed);
  },

  getAuthorStats() {
    const authorStats = booksData.reduce((acc, book) => {
      if (!acc[book.author]) {
        acc[book.author] = { total: 0, borrowed: 0 };
      }
      acc[book.author].total += 1;
      if (book.isBorrowed) acc[book.author].borrowed += 1;
      return acc;
    }, {});

    return Object.entries(authorStats).map(([author, stats], index) => ({
      id: index,
      author,
      total: stats.total,
      borrowed: stats.borrowed,
    }));
  },

};
