import { useEffect, useState } from "react";
import API from "../../../services/api";
import { Plus } from "lucide-react";
import LogSimulationModal from "./LogSimulationModal";

export default function TradesOverview({ onExplain }) {
    const [trades, setTrades] = useState([]);
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);

    useEffect(() => {
        loadTrades();
    }, []);

    const loadTrades = () => {
        const userId = localStorage.getItem("userId");
        if (userId) API.get(`/dashboard/trades/${userId}`).then(setTrades).catch(console.error);
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-white">Active Simulations & Paper Trades</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsLogModalOpen(true)}
                        className="flex items-center gap-1 text-xs bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg transition font-bold"
                    >
                        <Plus size={14} /> Log Simulation
                    </button>
                    <button className="text-xs text-slate-500 hover:text-white transition">View History</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-950/50">
                        <tr>
                            <th className="px-4 py-3">Symbol</th>
                            <th className="px-4 py-3">Signal</th>
                            <th className="px-4 py-3">Strategy</th>
                            <th className="px-4 py-3">Duration</th>
                            <th className="px-4 py-3">Conf.</th>
                            <th className="px-4 py-3">Paper P&L</th>
                            <th className="px-4 py-3 text-right">Learning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trades.map((trade) => (
                            <tr key={trade.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                                <td className="px-4 py-3 font-medium text-white">{trade.symbol}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${trade.side === "BUY" ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
                                        }`}>
                                        {trade.side === "BUY" ? "BULLISH" : "BEARISH"}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                                        {trade.strategy || "N/A"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-xs">{trade.duration || "N/A"}</td>
                                <td className="px-4 py-3">
                                    <div className="w-16 bg-slate-800 rounded-full h-1.5 mt-1">
                                        <div
                                            className="bg-cyan-500 h-1.5 rounded-full"
                                            style={{ width: `${trade.confidence || 0}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] text-slate-500">{trade.confidence}%</span>
                                </td>
                                <td className={`px-4 py-3 font-bold ${trade.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                                    {trade.pnl > 0 ? "+" : ""}₹{trade.pnl}
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button
                                        onClick={() => onExplain(trade)}
                                        className="text-cyan-400 hover:text-white border border-cyan-400/30 hover:bg-cyan-400/10 px-3 py-1 rounded transition text-xs"
                                    >
                                        Analyze Logic
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isLogModalOpen && (
                <LogSimulationModal
                    onClose={() => setIsLogModalOpen(false)}
                    onSave={() => loadTrades()}
                />
            )}
        </div>
    );
}
