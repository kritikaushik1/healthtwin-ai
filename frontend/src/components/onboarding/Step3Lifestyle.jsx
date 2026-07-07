export default function Step3Lifestyle({ next, back }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 shadow-lg">

      <h1 className="text-3xl font-bold">
        Lifestyle
      </h1>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <input
          placeholder="Sleep Hours"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Water Intake (L)"
          className="rounded-xl border p-4"
        />

        <select className="rounded-xl border p-4">
          <option>Exercise</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Rarely</option>
        </select>

        <select className="rounded-xl border p-4">
          <option>Diet</option>
          <option>Vegetarian</option>
          <option>Eggetarian</option>
          <option>Non Vegetarian</option>
        </select>

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