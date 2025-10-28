import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  type = "button",
  primary,
  secondary,
  danger,
  outline,
  disabled = false,
  className,
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none";

  const variantClass = primary
    ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300"
    : secondary
    ? "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100"
    : danger
    ? "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-300"
    : outline
    ? "border border-gray-400 text-gray-700 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
    : "bg-gray-100 text-gray-800";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variantClass, className)}
    >
      {children}
    </button>
  );
}
