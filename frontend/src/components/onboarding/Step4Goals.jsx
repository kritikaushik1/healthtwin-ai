export default function Step4Goals({ next, back }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 shadow-lg">

      <h1 className="text-3xl font-bold">
        Health Goals
      </h1>

      <div className="mt-8 grid gap-4">

        <label><input type="checkbox" /> Weight Loss</label>

        <label><input type="checkbox" /> Muscle Gain</label>

        <label><input type="checkbox" /> PCOS Management</label>

        <label><input type="checkbox" /> Diabetes Management</label>

        <label><input type="checkbox" /> Better Sleep</label>

        <label><input type="checkbox" /> Improve Fitness</label>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={back}
          className="rounded-xl border px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={next}
          className="rounded-xl bg-green-600 px-8 py-3 text-white"
        >
          Review
        </button>

      </div>

    </div>
  );
}