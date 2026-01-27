export default function TradeRow({ trade }) {
  const isProfit = trade.pnl > 0;

  return (
    <tr className="hover:bg-slate-800 transition">
      <td>{trade.asset}</td>
      <td className={trade.type === "BUY" ? "text-green-400" : "text-red-400"}>
        {trade.type}
      </td>
      <td>${trade.entry}</td>
      <td>${trade.exit}</td>
      <td>{trade.qty}</td>
      <td className={isProfit ? "text-green-400" : "text-red-400"}>
        {isProfit ? "+" : "-"}${Math.abs(trade.pnl)}
      </td>
      <td className="text-slate-400">{trade.date}</td>
    </tr>
  );
}
