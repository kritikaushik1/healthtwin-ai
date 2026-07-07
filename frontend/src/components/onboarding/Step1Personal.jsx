export default function Step1Personal({ next }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-10 shadow-lg">

      <h1 className="text-3xl font-bold">
        Personal Information
      </h1>

      <p className="mt-2 text-slate-500">
        Let's start with some basic details.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <input
          placeholder="Date of Birth"
          type="date"
          className="rounded-xl border p-4"
        />

        <select className="rounded-xl border p-4">
          <option>Gender</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>

        <input
          placeholder="Height (cm)"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Weight (kg)"
          className="rounded-xl border p-4"
        />

      </div>

      <button
        onClick={next}
        className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white"
      >
        Continue
      </button>

    </div>
  );
}