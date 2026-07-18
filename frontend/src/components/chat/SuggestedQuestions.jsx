import GlassPanel from "../ui/GlassPanel";

export default function SuggestedQuestions({ questions }) {
  return (
    <GlassPanel className="space-y-4">
      <div>
        <p className="text-sm font-medium text-slate-500">Suggested prompts</p>
        <h3 className="text-xl font-semibold text-slate-900">Start with a question</h3>
      </div>
      <div className="space-y-2">
        {questions.map((question) => (
          <button key={question} className="w-full rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3 text-left text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/70">
            {question}
          </button>
        ))}
      </div>
    </GlassPanel>
  );
}
