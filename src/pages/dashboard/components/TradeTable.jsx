import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function TradeTable() {
  return (
    <AnimatedCard>
      <div className="card">
        <h3>Recent Trades</h3>
        <table className="table">
          <tbody>
            <tr><td>AAPL</td><td>BUY</td><td className="green">+4.2%</td></tr>
            <tr><td>BTC</td><td>SELL</td><td className="red">-1.1%</td></tr>
          </tbody>
        </table>
      </div>
    </AnimatedCard>
  );
}
