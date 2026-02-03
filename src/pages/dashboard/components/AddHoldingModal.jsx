import { useState } from "react";
import { X } from "lucide-react";
import API from "../../../services/api";

export default function AddHoldingModal({ onClose, onSave }) {
    const [formData, setFormData] = useState({
        symbol: "",
        qty: "",
        avgPrice: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                alert("User ID not found. Please log in again.");
                return;
            }

            const payload = {
                userId,
                symbol: formData.symbol,
                qty: Number(formData.qty),
                avgPrice: Number(formData.avgPrice),
            };

            console.log("Sending payload:", payload);

            if (isNaN(payload.qty) || payload.qty <= 0) {
                alert("Please enter a valid quantity");
                return;
            }
            if (isNaN(payload.avgPrice) || payload.avgPrice < 0) {
                alert("Please enter a valid price");
                return;
            }

            await API.post("/dashboard/data/portfolio", payload);
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

                <h2 className="text-xl font-bold text-white mb-6">Add Portfolio Holding</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Stock Symbol</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none uppercase"
                            placeholder="e.g. TCS"
                            value={formData.symbol}
                            onChange={e => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Quantity</label>
                            <input
                                required
                                type="number"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                placeholder="10"
                                value={formData.qty}
                                onChange={e => setFormData({ ...formData, qty: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Avg. Price (₹)</label>
                            <input
                                required
                                type="number"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-cyan-400 outline-none"
                                placeholder="1500"
                                value={formData.avgPrice}
                                onChange={e => setFormData({ ...formData, avgPrice: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition mt-4 disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Add to Portfolio"}
                    </button>
                </form>
            </div>
        </div>
    );
}
