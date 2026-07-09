import AppLayout from "../components/layout/AppLayout";
import BodyVisualization from "../components/health/BodyVisualization";
import OrganHealthCard from "../components/health/OrganHealthCard";
import HealthScoreRing from "../components/health/HealthScoreRing";
import BodyMetricsCard from "../components/health/BodyMetricsCard";
import { healthTwinData } from "../data/mockUiData";

export default function HealthTwin() {
  return (
    <AppLayout title="Health Twin" subtitle="Track the body systems that matter most to your daily wellbeing.">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <BodyVisualization />
        <HealthScoreRing score={healthTwinData.healthScore} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {healthTwinData.organs.map((organ) => (
          <OrganHealthCard key={organ.name} organ={organ} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {healthTwinData.bodyMetrics.map((metric) => (
          <BodyMetricsCard key={metric.label} metric={metric} />
        ))}
      </div>
    </AppLayout>
  );
}