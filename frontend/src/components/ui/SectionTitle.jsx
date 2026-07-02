export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-14 text-center">

      <h2 className="text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}