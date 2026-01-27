import AdvisorHeader from "./components/AdvisorHeader";
import ChatBox from "./components/ChatBox";
import QuickQuestions from "./components/QuickQuestions";
import Capabilities from "./components/Capabilities";
import TeachingToggle from "./components/TeachingToggle";
import DataSources from "./components/DataSources";
import PortfolioAccess from "./components/PortfolioAccess";
import AIInsightPanel from "./components/AIInsightPanel";

export default function AIAdvisor() {
  return (
    <div className="space-y-8 text-white">
      {/* HEADER */}
      <AdvisorHeader />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">

        {/* LEFT COLUMN */}
        <div className="xl:col-span-2 space-y-6">
          <ChatBox />
          <QuickQuestions />
          <div></div>
           <AIInsightPanel />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6 sticky top-6">
          <Capabilities />
          <TeachingToggle />
          <DataSources />
          
          <PortfolioAccess />
        </div>

      </div>
    </div>
  );
}
