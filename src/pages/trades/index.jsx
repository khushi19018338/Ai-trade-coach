import TradesHeader from "./components/TradesHeader";
import TradesFilters from "./components/TradesFilters";
import TradesTable from "./components/TradesTable";

export default function Trades() {
  return (
    <div className="space-y-8 text-white">
      <TradesHeader />
      <TradesFilters />
      <TradesTable />
    </div>
  );
}
