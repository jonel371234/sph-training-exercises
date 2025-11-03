export default function SearchInput({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                  transition
                  ${className}`}
    />
  );
}
