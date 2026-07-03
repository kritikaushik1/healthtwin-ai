export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}

    </div>
  );
}