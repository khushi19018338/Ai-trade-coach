import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function CandlestickChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 320,
      layout: {
        background: { color: "#020617" },
        textColor: "#CBD5E1",
      },
      grid: {
        vertLines: { color: "#1E293B" },
        horzLines: { color: "#1E293B" },
      },
      timeScale: {
        borderColor: "#334155",
      },
      rightPriceScale: {
        borderColor: "#334155",
      },
    });

    const series = chart.addCandlestickSeries({
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderUpColor: "#22c55e",
      borderDownColor: "#ef4444",
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });

    series.setData([
      { time: "2024-01-01", open: 165, high: 170, low: 162, close: 168 },
      { time: "2024-01-02", open: 168, high: 172, low: 166, close: 170 },
      { time: "2024-01-03", open: 170, high: 171, low: 160, close: 162 },
      { time: "2024-01-04", open: 162, high: 175, low: 161, close: 172 },
      { time: "2024-01-05", open: 172, high: 176, low: 169, close: 170 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartRef} className="w-full h-[320px]" />;
}
