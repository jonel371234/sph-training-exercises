import { useState } from "react";
import { BookService } from "../services/BookService";
import Dropdown from "./common/Dropdown";
import BookCardItem from "./common/BookCardItem";
import SearchInput from "./common/SearchInput";

export default function BookList() {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const allBooks = BookService.getAllBooks();
  const authors = [...new Set(allBooks.map((book) => book.author))];

  const filteredBooks = allBooks.filter((book) => {
    const matchesAuthor = selectedAuthor ? book.author === selectedAuthor : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesAuthor && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 Library Books</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search by book title..."
        />
        <Dropdown
          options={authors}
          value={selectedAuthor}
          onChange={setSelectedAuthor}
          placeholder="All Authors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredBooks.map((book) => (
          <BookCardItem key={book.id} book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <p className="col-span-2 text-center text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
}
