export default function BookCardItem({ book }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
      <p className="text-gray-600 mb-2">{book.author}</p>
    </div>
  );
}
