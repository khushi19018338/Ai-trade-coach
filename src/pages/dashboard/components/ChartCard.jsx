import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { TRADABLES } from "./tradables";
import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function ChartCard({ asset }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    chartContainerRef.current.innerHTML = "";

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 420,
      layout: {
        background: { color: "transparent" },
        textColor: "#cbd5f5",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.05)" },
        horzLines: { color: "rgba(255,255,255,0.05)" },
      },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.1)" },
      timeScale: { borderColor: "rgba(255,255,255,0.1)" },
    });

    const series = chart.addAreaSeries({
      topColor: "rgba(34,211,238,0.3)",
      bottomColor: "rgba(34,211,238,0.05)",
      lineColor: "#22d3ee",
      lineWidth: 2,
    });

    const base = 180 + Math.random() * 10;

    series.setData([
      { time: "2024-01-01", value: base },
      { time: "2024-01-02", value: base + 4 },
      { time: "2024-01-03", value: base - 3 },
      { time: "2024-01-04", value: base + 7 },
      { time: "2024-01-05", value: base + 1 },
    ]);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [asset]);

  return (
    <AnimatedCard>
      <div className="card chart-box">
        <h2 className="text-cyan font-bold mb-2">
          {asset} — {TRADABLES[asset].name}
        </h2>

        <div ref={chartContainerRef} className="chart-inner" />

        <p className="text-xs mt-2 opacity-80">
          🧠 AI Reason: RSI oversold + EMA support
        </p>
      </div>
    </AnimatedCard>
  );
}
