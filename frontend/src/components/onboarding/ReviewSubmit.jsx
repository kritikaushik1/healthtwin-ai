export default function ReviewSubmit({ back }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 shadow-lg text-center">

      <h1 className="text-3xl font-bold">
        🎉 Your Digital Twin is Ready
      </h1>

      <p className="mt-4 text-slate-500">
        Click Finish to create your HealthTwin profile.
      </p>

      <div className="mt-10 flex justify-center gap-5">

        <button
          onClick={back}
          className="rounded-xl border px-8 py-3"
        >
          Back
        </button>

        <button
          className="rounded-xl bg-blue-600 px-8 py-3 text-white"
        >
          Finish
        </button>

      </div>

    </div>
  );
}