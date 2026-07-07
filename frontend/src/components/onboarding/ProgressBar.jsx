export default function ProgressBar({ step, totalSteps }) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="mx-auto max-w-3xl p-8">

      <div className="mb-3 flex justify-between">
        <span className="font-semibold">
          Step {step} of {totalSteps}
        </span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  );
}