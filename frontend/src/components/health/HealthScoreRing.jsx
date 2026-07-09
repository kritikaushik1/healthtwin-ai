import CircularProgress from "../common/CircularProgress";
import GlassPanel from "../ui/GlassPanel";

export default function HealthScoreRing({ score }) {
  return (
    <GlassPanel className="flex flex-col items-center justify-center space-y-4 py-8">
      <CircularProgress percentage={score} size={180} strokeWidth={14} />
      <div className="text-center">
        <p className="text-sm font-medium text-slate-500">Current score</p>
        <h3 className="text-2xl font-semibold text-slate-900">Body systems aligned</h3>
      </div>
    </GlassPanel>
  );
}
