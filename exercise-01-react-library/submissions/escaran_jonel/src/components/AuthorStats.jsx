import { booksData } from "../data/data";
import Table from "./common/Table";

export default function AuthorStats() {
  const authorStats = booksData.reduce((acc, book) => {
    if (!acc[book.author]) {
      acc[book.author] = { total: 0, borrowed: 0 };
    }
    acc[book.author].total += 1;
    if (book.isBorrowed) acc[book.author].borrowed += 1;
    return acc;
  }, {});

  const authors = Object.entries(authorStats).map(([author, stats], index) => ({
    id: index,
    author,
    total: stats.total,
    borrowed: stats.borrowed,
  }));

  const columns = [
    { key: "author", header: "Author" },
    { key: "total", header: "Total Books" },
    { key: "borrowed", header: "Currently Borrowed" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">🖋️ Author Stats</h1>
      <Table columns={columns} data={authors} />
    </div>
  );
}
