export default function NavigationButtons({
  back,
  next,
  isLast = false,
}) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        onClick={back}
        className="rounded-xl border px-8 py-3"
      >
        Back
      </button>

      <button
        onClick={next}
        className="rounded-xl bg-blue-600 px-8 py-3 text-white"
      >
        {isLast ? "Finish" : "Continue"}
      </button>

    </div>
  );
}