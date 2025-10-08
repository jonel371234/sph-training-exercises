import { booksData } from "../data/data";
import Table from "./common/Table";
import StatusBadge from "./common/StatusBadge";

export default function BorrowedBooks() {
  const borrowedBooks = booksData.filter((book) => book.isBorrowed);

  const columns = [
    { key: "title", header: "Title" },
    { key: "author", header: "Author" },
    {
      key: "status",
      header: "Status",
      render: (book) => {
        if (book.isOverdue) return <StatusBadge status="Overdue" />;
        return <StatusBadge status="Borrowed" />;
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">📖 Borrowed Books</h1>

      {borrowedBooks.length > 0 ? (
        <Table columns={columns} data={borrowedBooks} />
      ) : (
        <p className="text-center text-gray-500">No borrowed books currently.</p>
      )}
    </div>
  );
}
