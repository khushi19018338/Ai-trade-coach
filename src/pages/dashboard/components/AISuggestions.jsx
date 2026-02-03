import { useEffect, useState } from "react";
import API from "../../../services/api";

export default function AISuggestions() {
    const [stocks, setStocks] = useState([]);
    const [funds, setFunds] = useState([]);
    const [savings, setSavings] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            API.get(`/dashboard/ai/suggest/stocks/${userId}`).then(setStocks).catch(console.error);
            API.get(`/dashboard/ai/suggest/funds/${userId}`).then(setFunds).catch(console.error);
            API.get(`/dashboard/ai/savings/${userId}`).then(setSavings).catch(console.error);
        }
    }, []);

    return (
        <div className="space-y-6">
            {/* Savings & Idle Cash */}
            {savings && (
                <div className="bg-gradient-to-r from-emerald-900/30 to-slate-900 border border-emerald-500/30 p-4 rounded-xl">
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">💰 Savings Advice</h3>
                    <p className="text-sm text-slate-300">{savings.message}</p>
                    <button className="mt-3 text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg hover:bg-emerald-500/30 transition border border-emerald-500/20">
                        View Liquid Funds
                    </button>
                </div>
            )}

            {/* Stocks */}
            <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">AI Market Scans</h3>
                <div className="grid grid-cols-1 gap-3">
                    {stocks.map((stock, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-white">{stock.symbol}</span>
                                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${stock.action === "BUY" ? "bg-green-400/20 text-green-400" : "bg-yellow-400/20 text-yellow-400"
                                        }`}>
                                        {stock.action === "BUY" ? "BULLISH PATTERN" : "WATCHLIST"}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">{stock.reason}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-cyan-400 font-bold">{stock.confidence}% Prob.</div>
                                <button className="text-[10px] underline text-slate-500 hover:text-white mt-1">
                                    View Math
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Funds & Schemes */}
            <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Recommended Investments</h3>
                <div className="grid grid-cols-1 gap-3">
                    {funds.map((fund, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-white text-sm">{fund.name}</p>
                                    <p className="text-[10px] text-slate-500 uppercase mt-0.5">{fund.type || "Mutual Fund"}</p>
                                </div>
                                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded border border-indigo-500/30">
                                    Top Pick
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-2">{fund.reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
