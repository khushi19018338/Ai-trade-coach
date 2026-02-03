import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BrainCircuit, ShieldAlert, Target } from "lucide-react";
import API from "../../../services/api";

export default function TradeExplanationDrawer({ trade, onClose }) {
    const [explanation, setExplanation] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (trade) {
            setLoading(true);
            API.get(`/dashboard/ai/explain-trade/${trade.id}`)
                .then(setExplanation)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [trade]);

    return (
        <AnimatePresence>
            {trade && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 bottom-0 w-[400px] bg-slate-900 border-l border-cyan-400/30 shadow-2xl z-50 p-6 overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                            <BrainCircuit className="text-cyan-400" /> AI Insight
                        </h2>
                        <p className="text-slate-400 mb-6 font-mono text-sm">
                            Analysis for <span className="text-white font-bold">{trade.symbol}</span> ({trade.side})
                        </p>

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                            </div>
                        ) : explanation ? (
                            <div className="space-y-6">
                                {/* Strategy */}
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                                        <Target size={16} /> Strategy Logic
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {explanation.reasoning}
                                    </p>
                                    <div className="mt-3 inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs font-bold">
                                        Strategy: {explanation.strategy}
                                    </div>
                                </div>

                                {/* Risk */}
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                    <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                                        <ShieldAlert size={16} /> Risk Assessment
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {explanation.risk}
                                    </p>
                                </div>

                                {/* What if Wrong */}
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                    <h4 className="text-red-400 font-bold mb-2">⚠ What could go wrong?</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {explanation.whatIfWrong}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-red-400">Failed to load explanation.</p>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
