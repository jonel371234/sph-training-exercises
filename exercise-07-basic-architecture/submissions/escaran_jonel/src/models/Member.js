export default class Member {
  constructor({ id, name, history }) {
    this.id = id;
    this.name = name;
    this.history = history;
  }

  getBorrowedBooks() {
    return this.history.filter((h) => !h.returned);
  }

  getReturnedBooks() {
    return this.history.filter((h) => h.returned);
  }
}
