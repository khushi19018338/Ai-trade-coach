import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import AnimatedCard from "../../../components/ui/AnimatedCard";
const data = [
  { value: 120000 },
  { value: 125000 },
  { value: 122000 },
  { value: 130000 },
  { value: 128000 },
  { value: 135000 }
];

export default function PerformanceChart() {
  return (
    <AnimatedCard>
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h3 className="font-semibold mb-4">Portfolio Performance</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis hide />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </AnimatedCard>
  );
}
