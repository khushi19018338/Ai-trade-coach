export default function PositionsTable() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
      <h3 className="text-xl font-semibold mb-6">Open Positions</h3>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3 text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="text-left px-4">Asset</th>
              <th className="text-right px-4">Quantity</th>
              <th className="text-right px-4">Avg Price</th>
              <th className="text-right px-4">Current Price</th>
              <th className="text-right px-4">P&L</th>
              <th className="text-right px-4">P&L %</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-slate-900/60 hover:bg-slate-800 transition rounded-lg"
              >
                <td className="px-4 py-4 font-semibold">{row.asset}</td>
                <td className="px-4 py-4 text-right">{row.qty}</td>
                <td className="px-4 py-4 text-right">{row.avg}</td>
                <td className="px-4 py-4 text-right font-semibold">
                  {row.current}
                </td>
                <td
                  className={`px-4 py-4 text-right font-semibold ${
                    row.pnl > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {row.pnl > 0 ? "+" : ""}
                  {row.pnl}
                </td>
                <td
                  className={`px-4 py-4 text-right font-semibold ${
                    row.pnlPct > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {row.pnlPct > 0 ? "+" : ""}
                  {row.pnlPct}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* STATIC DATA (Replace with API later) */
const rows = [
  {
    asset: "AAPL",
    qty: 150,
    avg: "$165.2",
    current: "$178.32",
    pnl: 1968,
    pnlPct: 7.94,
  },
  {
    asset: "BTC",
    qty: 0.5,
    avg: "$62,000",
    current: "$67,234.5",
    pnl: 2617.25,
    pnlPct: 8.44,
  },
  {
    asset: "ETH",
    qty: 8,
    avg: "$3,200",
    current: "$3,542.18",
    pnl: 2737.44,
    pnlPct: 10.69,
  },
  {
    asset: "TSLA",
    qty: 50,
    avg: "$220",
    current: "$248.91",
    pnl: 1445.5,
    pnlPct: 13.14,
  },
];
