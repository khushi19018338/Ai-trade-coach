

import { useState } from "react";
import "./styles.css";

import StatCard from "./components/StatCard";
import ChartCard from "./components/ChartCard";
import CandleChartCard from "./components/CandleChartCard";
import TradeTable from "./components/TradeTable";
import { TRADABLES } from "./components/tradables";

import AnimatedGrid from "../../components/ui/AnimatedGrid";

export default function Dashboard() {
  const [asset, setAsset] = useState("GOOG");

  return (
    <div className="dashboard">

      {/* ===================== STATS ===================== */}
      <AnimatedGrid>
        <div className="grid-stats">
          <StatCard title="Portfolio Value" value="$125,430" change="+13.82%" />
          <StatCard title="BTC Price" value="$67,234" change="+3.12%" />
          <StatCard title="ETH Price" value="$3,542" change="+1.89%" />
          <StatCard title="Market Sentiment" value="Bullish" />
        </div>
      </AnimatedGrid>

      {/* ===================== MAIN GRID ===================== */}
      <AnimatedGrid>
        <div className="main-grid">

          {/* WATCHLIST */}
          <div className="card">
            <h3 className="font-bold mb-3">Watchlist</h3>

            {Object.keys(TRADABLES).map((key) => (
              <div
                key={key}
                className={`watchlist-item ${
                  asset === key ? "active" : ""
                }`}
                onClick={() => setAsset(key)}
              >
                {key} — {TRADABLES[key].name}
              </div>
            ))}
          </div>

          {/* LINE CHART */}
          <ChartCard asset={asset} />

          {/* AI SIGNAL */}
          <div className="card">
            <h3 className="font-bold mb-2">AI Signal</h3>
            <p className="text-green-400 text-xl font-bold">BUY</p>
            <p>Confidence: 87%</p>

            <div className="mt-2 text-sm">
              <p>Entry: $178.50</p>
              <p className="text-red-400">Stop Loss: $172.00</p>
              <p className="text-green-400">Take Profit: $190.00</p>
            </div>

            <button className="execute-btn">
              Execute Trade →
            </button>
          </div>

        </div>
      </AnimatedGrid>

      {/* ===================== CANDLE CHART ===================== */}
      <AnimatedGrid>
        <CandleChartCard asset={asset} />
      </AnimatedGrid>

      {/* ===================== TRADES ===================== */}
      <AnimatedGrid>
        <div className="trade-grid">
          <TradeTable />
        </div>
      </AnimatedGrid>

    </div>
  );
}
