import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function TradesFilters() {
  return (
    <AnimatedCard>
      <div className="flex flex-wrap gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <select className="filter">
          <option>All Assets</option>
          <option>AAPL</option>
          <option>BTC</option>
          <option>ETH</option>
        </select>

        <select className="filter">
          <option>All Types</option>
          <option>BUY</option>
          <option>SELL</option>
        </select>

        <select className="filter">
          <option>All Results</option>
          <option>Win</option>
          <option>Loss</option>
        </select>

        <input type="date" className="filter" />
        <input type="date" className="filter" />
      </div>
    </AnimatedCard>
  );
}
