export default function StatusBadge({ status }) {
  let colorClasses = "";

  switch (status) {
    case "Available":
      colorClasses = "bg-green-100 text-green-800";
      break;
    case "Returned":
      colorClasses = "bg-green-100 text-green-800";
      break;
    case "Borrowed":
      colorClasses = "bg-orange-100 text-orange-800";
      break;
    case "Overdue":
      colorClasses = "bg-red-100 text-red-800";
      break;
    default:
      colorClasses = "bg-gray-100 text-gray-800";
  }

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${colorClasses}`}
    >
      {status}
    </span>
  );
}
