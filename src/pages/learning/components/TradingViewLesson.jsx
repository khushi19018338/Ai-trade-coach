import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function TradingViewLesson({
  symbol = "NASDAQ:AAPL",
  title = "Live Chart Lesson",
}) {
  return (
    <AnimatedCard>
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
      <h3 className="font-semibold mb-3">
        📈 {title}
      </h3>

      <p className="text-sm text-slate-400 mb-4">
        Observe real-time price action and apply what you learned.
      </p>

      <iframe
        title="TradingView Chart"
        src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=15&theme=dark&style=1&toolbarbg=%23020217`}
        className="w-full h-96 rounded-lg"
        frameBorder="0"
        allowTransparency
      />
    </div>
    </AnimatedCard>
  );
}
