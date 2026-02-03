import { useState, useEffect } from "react";
import AnimatedCard from "../../../components/ui/AnimatedCard";
import CandleChartCard from "../../dashboard/components/CandleChartCard";
import { YahooService } from "../../../services/yahoo.service";

export default function TradingViewLesson({
  initialSymbol = "TCS.NS",
  title = "Live Market Analysis",
}) {
  const [symbol, setSymbol] = useState(initialSymbol);
  const [inputVal, setInputVal] = useState(initialSymbol);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(symbol);
  }, []);

  const fetchData = async (sym) => {
    setLoading(true);
    setError(null);
    try {
      const data = await YahooService.getOHLC(sym);
      setChartData(data);
    } catch (err) {
      setError("Failed to load data. Is the symbol correct? (Try TCS.NS)");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      const newSym = inputVal.trim().toUpperCase();
      setSymbol(newSym);
      fetchData(newSym);
    }
  }

  return (
    <AnimatedCard>
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
          <div>
            <h3 className="font-semibold text-white">
              📈 {title}
            </h3>
            <p className="text-sm text-slate-400">
              Analyze real-time price action (Yahoo Fin).
            </p>
          </div>

          {/* Symbol Input */}
          <form onSubmit={handleUpdate} className="flex gap-2">
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="bg-slate-800 text-white text-sm px-3 py-1 rounded border border-slate-700 focus:border-cyan-400 outline-none w-32 uppercase"
              placeholder="SYMBOL (e.g. TCS.NS)"
            />
            <button type="submit" className="bg-cyan-500 text-black text-xs font-bold px-3 rounded hover:bg-cyan-400">
              LOAD
            </button>
          </form>
        </div>

        {loading && <div className="text-cyan-400 text-sm animate-pulse mb-2">Fetching live data...</div>}
        {error && <div className="text-red-400 text-sm mb-2">{error}</div>}

        <div className="h-96 w-full">
          <CandleChartCard asset={symbol} data={chartData} />
        </div>
      </div>
    </AnimatedCard>
  );
}
