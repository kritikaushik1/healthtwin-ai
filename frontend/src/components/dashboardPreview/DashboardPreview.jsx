import { HeartPulse, Moon, Footprints, Brain } from "lucide-react";

import HumanBody from "../../assets/humanbody.png";

import HealthScoreCard from "./HealthScoreCard";
import HealthTrendChart from "./HealthTrendChart";
import MetricCard from "./MetricCard";
import AIInsightPopup from "./AIInsightPopup";

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[650px]">

      <AIInsightPopup />

      {/* Health Score */}

      <HealthScoreCard />

      {/* Human Body */}

      <div className="relative mt-8 flex justify-center">

        <img
          src={HumanBody}
          alt="Digital Twin"
          className="h-[500px] w-auto select-none"
        />

        {/* LEFT TOP */}

        <div className="absolute left-0 top-8">

          <MetricCard
            icon={<HeartPulse size={22} />}
            title="Heart Rate"
            value="72 BPM"
            subtitle="Normal"
          />

        </div>

        {/* RIGHT TOP */}

        <div className="absolute right-0 top-8">

          <MetricCard
            icon={<Brain size={22} />}
            title="AI Insight"
            value="+4 Health"
            subtitle="Recovery improving"
          />

        </div>

        {/* LEFT BOTTOM */}

        <div className="absolute bottom-14 left-0">

          <MetricCard
            icon={<Footprints size={22} />}
            title="Activity"
            value="8,420"
            subtitle="Goal: 10,000"
          />

        </div>

        {/* RIGHT BOTTOM */}

        <div className="absolute bottom-14 right-0">

          <MetricCard
            icon={<Moon size={22} />}
            title="Sleep"
            value="7h 42m"
            subtitle="Excellent"
          />

        </div>

      </div>

      {/* Chart */}

      <div className="mt-8">

        <HealthTrendChart />

      </div>

    </div>
  );
}