export default function Step2Medical({ next, back }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 shadow-lg">

      <h1 className="text-3xl font-bold">
        Medical Information
      </h1>

      <p className="mt-2 text-slate-500">
        Help us understand your health better.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <input
          placeholder="Blood Group"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Allergies"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Current Diseases"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Current Medicines"
          className="rounded-xl border p-4"
        />

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
          className="rounded-xl bg-blue-600 px-8 py-3 text-white"
        >
          Continue
        </button>

      </div>

    </div>
  );
}