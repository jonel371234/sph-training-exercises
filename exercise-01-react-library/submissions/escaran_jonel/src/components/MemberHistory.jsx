import { useState, useEffect } from "react";
import { membersData, booksData } from "../data/data";
import BorrowedBooksCard from "./common/BorrowedBooksCard";
import SearchInput from "./common/SearchInput";

export default function MemberHistory() {
  const [search, setSearch] = useState("");
  const [foundMembers, setFoundMembers] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setFoundMembers([]);
      return;
    }

    const filtered = membersData.filter((member) =>
      member.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    setFoundMembers(filtered);
  }, [search]);

  const getBookStatus = (title) => {
    const book = booksData.find((b) => b.title === title);
    if (!book) return "Unknown";
    if (book.isOverdue) return "Overdue";
    if (book.isBorrowed) return "Borrowed"; 
    return "Returned"; 
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">👤 Member History</h2>

      <div className="mb-6">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search by member name..."
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {foundMembers.length > 0 ? (
            foundMembers.map((member) => (
              <BorrowedBooksCard
                key={member.id}
                member={member}
                getBookStatus={getBookStatus}
              />
            ))
          ) : (
            search && <p className="text-center text-gray-500">No member found.</p>
          )}
        </div>

        <div className="w-full lg:w-64 bg-gray-50 p-4 rounded-md text-sm text-gray-700 shadow-sm">
          <p className="font-medium mb-2">Available Members:</p>
          <ul className="list-disc pl-5 space-y-1">
            {membersData.map((member) => (
              <li key={member.id}>{member.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
