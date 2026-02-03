import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import { Plus, TrendingUp, TrendingDown, Brain } from "lucide-react";
import AddHoldingModal from "./AddHoldingModal";

export default function PortfolioOverview({ onAddHolding, onAnalyze }) {
    const [holdings, setHoldings] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        loadHoldings();
    }, []);

    const loadHoldings = () => {
        const userId = localStorage.getItem("userId");
        if (userId) API.get(`/dashboard/data/portfolio/${userId}`).then(setHoldings).catch(console.error);
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-6">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">Your Holdings</h3>
                    <span className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-full">{holdings.length}</span>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-1 text-xs bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg transition font-bold"
                >
                    <Plus size={14} /> Add Holding
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-950/50">
                        <tr>
                            <th className="px-4 py-3">Symbol</th>
                            <th className="px-4 py-3">Invested</th>
                            <th className="px-4 py-3">Current</th>
                            <th className="px-4 py-3">P&L</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.map((start) => (
                            <tr key={start.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                                <td className="px-4 py-3">
                                    <div className="font-bold text-white">{start.symbol}</div>
                                    <div className="text-[10px] text-slate-500">{start.qty} Units @ ₹{start.avgPrice}</div>
                                </td>
                                <td className="px-4 py-3">₹{start.invested.toLocaleString()}</td>
                                <td className="px-4 py-3 text-white font-medium">₹{start.current.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <div className={`font-bold flex items-center gap-1 ${start.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                                        {start.pnl >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                        ₹{Math.abs(start.pnl).toLocaleString()}
                                        <span className={`text-[10px] bg-slate-900 px-1 rounded ml-1 ${start.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {start.change}%
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button
                                        onClick={() => onAnalyze(start)}
                                        className="text-indigo-400 hover:text-white border border-indigo-400/30 hover:bg-indigo-400/10 px-2 py-1 rounded transition text-[10px] flex items-center gap-1 ml-auto"
                                    >
                                        <Brain size={10} /> Ask AI
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {holdings.length === 0 && (
                            <tr>
                                <td colSpan="5" className="px-4 py-8 text-center text-slate-500">
                                    No holdings added yet. Click "Add Holding" to start tracking.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isAddModalOpen && (
                <AddHoldingModal
                    onClose={() => setIsAddModalOpen(false)}
                    onSave={() => {
                        loadHoldings();
                        if (onAddHolding) onAddHolding();
                    }}
                />
            )}
        </div>
    );
}
