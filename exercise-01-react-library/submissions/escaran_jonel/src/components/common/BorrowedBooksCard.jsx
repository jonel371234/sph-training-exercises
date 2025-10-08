import StatusBadge from "./StatusBadge";

export default function BorrowedBooksCard({ member, getBookStatus }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <ul className="mt-2 space-y-1">
        {member.history.map((book, index) => {
          const status = getBookStatus(book.title);
          return (
            <li key={index} className="py-1 flex justify-between items-center">
              <span>📖 {book.title}</span>
              <StatusBadge status={status} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
