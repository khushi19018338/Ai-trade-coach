
import { useState } from "react";
import DashboardSummary from "./components/DashboardSummary";
import TradesOverview from "./components/TradesOverview";
import InlineWatchlist from "./components/InlineWatchlist";
import AIPortfolioReview from "./components/AIPortfolioReview";
import AISuggestions from "./components/AISuggestions";
import TradeExplanationDrawer from "./components/TradeExplanationDrawer";
import CandleChartCard from "./components/CandleChartCard";
import PortfolioOverview from "./components/PortfolioOverview";
import MentorshipCard from "./components/MentorshipCard";

export default function Dashboard() {
  const [asset, setAsset] = useState("RELIANCE");
  const [selectedTrade, setSelectedTrade] = useState(null);

  return (
    <div className="space-y-6 pb-20 relative">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT COLUMN (Main Content) */}
        <div className="lg:col-span-8 space-y-6">

          {/* 1. Summary Section */}
          <section>
            <DashboardSummary />
          </section>

          {/* NEW: Portfolio Section */}
          <section>
            <PortfolioOverview
              onAnalyze={(holding) => {
                console.log("Analyze holding:", holding);
              }}
            />
          </section>

          {/* CHART SECTION (Re-added) */}
          <section>
            <CandleChartCard asset={asset} />
          </section>

          {/* 2. Trades Overview */}
          <section>
            <TradesOverview onExplain={setSelectedTrade} />
          </section>

          {/* 4. AI Portfolio Review */}
          <section>
            <AIPortfolioReview />
          </section>

        </div>

        {/* RIGHT COLUMN (Sidebar/Assistant) */}
        <div className="lg:col-span-4 space-y-6">

          {/* NEW: Expert Mentorship Promo */}
          <section>
            <MentorshipCard />
          </section>

          {/* 6. Inline Watchlist */}
          <section className="h-[400px]">
            <InlineWatchlist onSelect={setAsset} />
          </section>

          {/* 5. AI Suggestions */}
          <section>
            <AISuggestions />
          </section>

        </div>
      </div>

      {/* DRAWERS */}
      <TradeExplanationDrawer
        trade={selectedTrade}
        onClose={() => setSelectedTrade(null)}
      />

    </div>
  );
}
