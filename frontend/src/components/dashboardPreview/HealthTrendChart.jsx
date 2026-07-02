import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "M", score: 72 },
  { day: "T", score: 75 },
  { day: "W", score: 78 },
  { day: "T", score: 81 },
  { day: "F", score: 83 },
  { day: "S", score: 85 },
  { day: "S", score: 87 },
];

export default function HealthTrendChart() {
  return (
    <div className="mt-6 rounded-3xl bg-white p-5 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold">
        Weekly Health Trend
      </h3>

      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563EB"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}