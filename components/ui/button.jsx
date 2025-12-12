export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
