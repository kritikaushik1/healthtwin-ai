import {
  ShieldCheck,
  Brain,
  HeartPulse,
  FlaskConical,
} from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-8 text-gray-500">

      <div className="flex items-center gap-2">
        <Brain size={18} />
        AI Powered
      </div>

      <div className="flex items-center gap-2">
        <ShieldCheck size={18} />
        Privacy First
      </div>

      <div className="flex items-center gap-2">
        <FlaskConical size={18} />
        Medical Research
      </div>

      <div className="flex items-center gap-2">
        <HeartPulse size={18} />
        Explainable AI
      </div>

    </div>
  );
}