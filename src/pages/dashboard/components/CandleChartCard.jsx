import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { candleMap, TRADABLES } from "./tradables";
import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function CandleChartCard({ asset }) {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ✅ CREATE CHART ONLY ONCE
    if (!chartRef.current) {
      chartRef.current = createChart(containerRef.current, {
        height: 320,
        layout: {
          background: { color: "transparent" },
          textColor: "#cbd5e1",
        },
        grid: {
          vertLines: { color: "#1e293b" },
          horzLines: { color: "#1e293b" },
        },
        rightPriceScale: {
          borderColor: "#334155",
        },
        timeScale: {
          borderColor: "#334155",
          timeVisible: true,
        },
        crosshair: {
          mode: 1,
        },
      });

      seriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: "#22c55e",
        downColor: "#ef4444",
        wickUpColor: "#22c55e",
        wickDownColor: "#ef4444",
        borderVisible: false,
      });
    }

    // ✅ UPDATE DATA ON ASSET CHANGE
    if (seriesRef.current && candleMap[asset]) {
      seriesRef.current.setData(candleMap[asset]);
      chartRef.current.timeScale().fitContent();
    }

    // ❌ DO NOT REMOVE CHART (avoids disposed error)
    return () => {};
  }, [asset]);

  return (
    <AnimatedCard>
      <div className="card">
        <h3 className="font-bold mb-3 text-cyan">
          {asset} — {TRADABLES[asset]?.name} Candlestick
        </h3>

        <div ref={containerRef} className="w-full h-[320px]" />
      </div>
    </AnimatedCard>
  );
}
