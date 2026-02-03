import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CandleChartCard from "../dashboard/components/CandleChartCard";
import API from "../../services/api";
import { Brain, Wallet } from "lucide-react";

export default function StockDetail() {
    const { symbol } = useParams();
    const navigate = useNavigate();
    const [insight, setInsight] = useState(null);

    useEffect(() => {
        // Mock API call for specific stock insight
        API.get("/dashboard/ai/suggest/stocks/user-123").then(res => {
            const found = res.find(s => s.symbol === symbol);
            setInsight(found || { action: "HOLD", reason: "Market consolidation observed.", confidence: 50 });
        }).catch(console.error);
    }, [symbol]);

    return (
        <div className="p-6 text-white space-y-6">
            <button onClick={() => navigate(-1)} className="text-cyan-400 mb-2 hover:underline text-sm">
                &larr; Back to Dashboard
            </button>

            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold">{symbol}</h1>
                    <p className="text-slate-400">Equity • NSE</p>
                </div>
                <div className="text-right">
                    <h2 className="text-2xl font-bold">₹3,450.00</h2>
                    <p className="text-green-400 font-medium">+1.2% Today</p>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* CHART (Span 2) */}
                <div className="lg:col-span-2">
                    <CandleChartCard asset={symbol} />
                </div>

                {/* RIGHT COLUMN (AI & Position) */}
                <div className="space-y-6">

                    {/* AI Insight */}
                    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                        <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <Brain size={18} /> AI Opinion
                        </h3>
                        {insight ? (
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 text-sm">Signal</span>
                                    <span className={`font-bold px-2 py-1 rounded text-xs ${insight.action === "BUY" ? "bg-green-400/20 text-green-400" : "bg-yellow-400/20 text-yellow-400"
                                        }`}>{insight.action === "BUY" ? "BULLISH" : "BEARISH"}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 text-sm">Confidence</span>
                                    <span className="text-white font-bold">{insight.confidence}%</span>
                                </div>
                                <p className="text-slate-400 text-sm bg-slate-950 p-3 rounded mt-2">
                                    "{insight.reason}"
                                </p>
                            </div>
                        ) : (
                            <div className="animate-pulse h-20 bg-slate-800 rounded"></div>
                        )}
                    </div>

                    {/* Your Position */}
                    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <Wallet size={18} /> Simulated Position
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Quantity</span>
                                <span className="text-white font-medium">10</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Avg. Price</span>
                                <span className="text-white font-medium">₹3,400</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">P&L</span>
                                <span className="text-green-400 font-bold">+₹500.00</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-2 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition">
                            Adjust Simulation
                        </button>
                    </div>

                    {/* Learning */}
                    <div className="bg-gradient-to-br from-indigo-900/30 to-slate-900 p-5 rounded-xl border border-indigo-500/20">
                        <h3 className="text-indigo-300 font-bold mb-2">Learn</h3>
                        <p className="text-sm text-slate-400 mb-3">
                            This stock is currently forming a <strong>Bullish Flag</strong> pattern.
                        </p>
                        <button className="text-xs text-indigo-400 hover:text-white underline">
                            Read about Bull Multi-baggers &rarr;
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
