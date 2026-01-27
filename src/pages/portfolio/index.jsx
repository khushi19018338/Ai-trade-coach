import PortfolioStatCard from "./components/PortfolioStatCard";
import PerformanceChart from "./components/PerformanceChart";
import AllocationChart from "./components/AllocationChart";
import PositionsTable from "./components/PositionsTable";
import AISuggestions from "./components/AISuggestions";

export default function Portfolio() {
  return (
    <div className="space-y-8 text-white">

      <h1 className="text-3xl font-bold">Portfolio Overview</h1>
      <p className="text-slate-400">Track your investments and performance</p>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <PortfolioStatCard title="Total Value" value="$125,430.5" change="+13.82%" />
        <PortfolioStatCard title="Total P&L" value="+$15,234.2" positive />
        <PortfolioStatCard title="Open Positions" value="4" />
        <PortfolioStatCard title="Win Rate" value="76%" />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <AllocationChart />
      </div>

      {/* TABLE */}
      <PositionsTable />

      {/* AI SUGGESTIONS */}
      <AISuggestions />

    </div>
  );
}
