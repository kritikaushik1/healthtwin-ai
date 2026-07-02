import { HeartPulse, Moon, Footprints, Brain } from "lucide-react";
import HealthTrendChart from "./HealthTrendChart";
import HealthScoreCard from "./HealthScoreCard";
import MetricCard from "./MetricCard";
import AIInsightPopup from "./AIInsightPopup";
export default function DashboardPreview() {
  return (
   <div className="relative w-full max-w-xl rounded-[36px] border border-gray-100 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
      <AIInsightPopup />

<HealthScoreCard />

.

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <MetricCard
          icon={<HeartPulse size={22} />}
          title="Heart Rate"
          value="72 BPM"
          subtitle="Normal"
        />

        <MetricCard
          icon={<Moon size={22} />}
          title="Sleep"
          value="7h 42m"
          subtitle="Excellent"
        />

        <MetricCard
          icon={<Footprints size={22} />}
          title="Activity"
          value="8,420"
          subtitle="Goal: 10,000"
        />

        <MetricCard
          icon={<Brain size={22} />}
          title="AI Insight"
          value="+4 Health"
          subtitle="Recovery improving"
        />

      </div>
<HealthTrendChart />
    </div>
  );
}