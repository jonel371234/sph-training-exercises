import { BookService } from "../services/BookService";
import Table from "./common/Table";

export default function AuthorStats() {
  const authors = BookService.getAuthorStats();

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
