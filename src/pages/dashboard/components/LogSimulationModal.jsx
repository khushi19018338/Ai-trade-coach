import { useState } from "react";
import { X } from "lucide-react";
import API from "../../../services/api";

export default function LogSimulationModal({ onClose, onSave }) {
    const [formData, setFormData] = useState({
        symbol: "",
        side: "BUY",
        strategy: "Swing",
        entry: "",
        qty: "",
        confidence: 50
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await API.post("/dashboard/data/trade", formData);
            if (onSave) onSave();
            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-xl p-6 relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-bold text-white mb-6">Log New Simulation</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Stock Symbol</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none uppercase"
                            placeholder="e.g. RELIANCE"
                            value={formData.symbol}
                            onChange={e => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Strategy Type</label>
                            <select
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                value={formData.strategy}
                                onChange={e => setFormData({ ...formData, strategy: e.target.value })}
                            >
                                <option>Swing</option>
                                <option>Intraday</option>
                                <option>Long Term</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Direction</label>
                            <select
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                value={formData.side}
                                onChange={e => setFormData({ ...formData, side: e.target.value })}
                            >
                                <option value="BUY">Bullish (Buy)</option>
                                <option value="SELL">Bearish (Sell)</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Entry Price (₹)</label>
                            <input
                                required
                                type="number"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                value={formData.entry}
                                onChange={e => setFormData({ ...formData, entry: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Quantity</label>
                            <input
                                required
                                type="number"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                value={formData.qty}
                                onChange={e => setFormData({ ...formData, qty: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Mathematical Confidence ({formData.confidence}%)
                        </label>
                        <input
                            type="range"
                            min="0" max="100"
                            className="w-full accent-cyan-400"
                            value={formData.confidence}
                            onChange={e => setFormData({ ...formData, confidence: e.target.value })}
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition mt-4 disabled:opacity-50"
                    >
                        {loading ? "Logging..." : "Log Simulation"}
                    </button>
                </form>
            </div>
        </div>
    );
}
