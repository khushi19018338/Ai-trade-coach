import { PieChart, Pie, Cell } from "recharts";
import AnimatedCard from "../../../components/ui/AnimatedCard";
const data = [
  { name: "Tech", value: 58 },
  { name: "Crypto", value: 30 },
  { name: "Others", value: 12 }
];

const COLORS = ["#22d3ee", "#4ade80", "#94a3b8"];

export default function AllocationChart() {
  return (
    <AnimatedCard>
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h3 className="font-semibold mb-4">Asset Allocation</h3>

      <PieChart width={260} height={260}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </PieChart>
    </div>
    </AnimatedCard>
  );
}
