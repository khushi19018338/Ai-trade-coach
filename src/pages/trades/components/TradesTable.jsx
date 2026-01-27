import AnimatedCard from "../../../components/ui/AnimatedCard";
import TradeRow from "./TradeRow";

const trades = [
  {
    asset: "AAPL",
    type: "BUY",
    entry: 165.2,
    exit: 178.3,
    qty: 150,
    pnl: 1968,
    date: "2024-01-12",
  },
  {
    asset: "BTC",
    type: "SELL",
    entry: 62000,
    exit: 67234,
    qty: 0.5,
    pnl: -820,
    date: "2024-01-10",
  },
];

export default function TradesTable() {
  return (
    <AnimatedCard>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>Qty</th>
              <th>P&L</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((t, i) => (
              <TradeRow key={i} trade={t} />
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedCard>
  );
}
