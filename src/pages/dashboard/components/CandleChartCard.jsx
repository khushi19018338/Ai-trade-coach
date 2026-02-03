import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { candleMap, TRADABLES } from "./tradables";
import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function CandleChartCard({ asset, ...props }) {
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
    if (seriesRef.current) {
      // If external data is provided, use it. Otherwise check map or generate mock.
      let chartData = [];

      if (props.data && props.data.length > 0) {
        chartData = props.data;
      } else {
        chartData = candleMap[props.asset] || generateMockData();
      }

      seriesRef.current.setData(chartData);
      chartRef.current.timeScale().fitContent();
    }

    // ❌ DO NOT REMOVE CHART (avoids disposed error)
    return () => { };
  }, [props.asset, props.data]); // Re-run if asset OR data changes

  // Helper to generate random consistent-ish data for unknown symbols
  function generateMockData() {
    let price = 1000 + Math.random() * 2000;
    const data = [];
    const date = new Date("2024-01-01");
    for (let i = 0; i < 30; i++) {
      const open = price;
      const close = price + (Math.random() - 0.5) * 50;
      const high = Math.max(open, close) + Math.random() * 20;
      const low = Math.min(open, close) - Math.random() * 20;
      data.push({
        time: date.toISOString().split("T")[0],
        open, high, low, close
      });
      price = close;
      date.setDate(date.getDate() + 1);
    }
    return data;
  }

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
