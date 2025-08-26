import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow ${className}`}
    >
      {children}
    </button>
  );
}