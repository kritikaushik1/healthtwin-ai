export default function Badge({
  children,
}) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      bg-blue-50
      px-4
      py-2
      text-sm
      font-medium
      text-blue-700
      border
      border-blue-200
      "
    >
      {children}
    </span>
  );
}