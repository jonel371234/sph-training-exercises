import classNames from "classnames";

export default function Button({ 
  children, 
  onClick, 
  className, 
  primary, 
  danger, 
  secondary
 }) {
  const buttonClass = classNames(
    "px-3 py-1 rounded-md text-white transition",
    {
      "bg-blue-500 hover:bg-blue-600": primary,
      "bg-red-500 hover:bg-red-600": danger,
      "bg-gray-500 hover:bg-gray-600": secondary,
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
