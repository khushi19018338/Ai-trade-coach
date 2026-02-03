import { useEffect, useState } from "react";
import API from "../../../services/api";
import { AlertTriangle, TrendingUp, AlertCircle } from "lucide-react";

export default function AIPortfolioReview() {
    const [review, setReview] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) API.get(`/dashboard/ai/review/${userId}`).then(setReview).catch(console.error);
    }, []);

    if (!review) return null;

    return (
        <div className="p-4 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/30 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={64} className="text-indigo-400" />
            </div>
            <h3 className="text-indigo-300 font-bold mb-3 flex items-center gap-2">
                <span className="animate-pulse">✨</span> Copilot Insights
            </h3>

            <div className="space-y-3">
                {/* Concentration */}
                <div className="flex gap-3 items-start">
                    <AlertTriangle size={16} className="text-yellow-400 mt-1 shrink-0" />
                    <p className="text-sm text-slate-300">
                        <span className="font-bold text-white">Concentration Risk:</span> {review.concentration}
                    </p>
                </div>

                {/* Risk */}
                <div className="flex gap-3 items-start">
                    <AlertCircle size={16} className="text-red-400 mt-1 shrink-0" />
                    <p className="text-sm text-slate-300">
                        <span className="font-bold text-white">Portfolio Beta:</span> {review.risk}
                    </p>
                </div>

                {/* Behavior */}
                <div className="flex gap-3 items-start">
                    <TrendingUp size={16} className="text-cyan-400 mt-1 shrink-0" />
                    <p className="text-sm text-slate-300">
                        <span className="font-bold text-white">Behavioral Pattern:</span> {review.behavior}
                    </p>
                </div>
            </div>

            <button className="mt-4 w-full py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs font-bold rounded transition">
                View Full Analysis
            </button>
        </div>
    );
}
