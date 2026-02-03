import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ArrowUpRight, ArrowDownLeft, History } from "lucide-react";

export default function WalletPage() {
    const transactions = [
        { id: 1, type: "deposit", amount: "+ $500.00", date: "Today", status: "Completed" },
        { id: 2, type: "payment", amount: "- $50.00", date: "Yesterday", status: "Mentor Session" },
        { id: 3, type: "payment", amount: "- $120.00", date: "Feb 10", status: "Subscription" },
    ];

    return (
        <div className="p-8 text-white max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Wallet</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Balance Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 flex flex-col justify-between shadow-2xl"
                >
                    <div>
                        <p className="text-emerald-100 font-medium mb-1">Total Balance</p>
                        <h3 className="text-5xl font-bold text-white">$1,450.00</h3>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <button className="flex-1 bg-white text-emerald-800 font-bold py-3 rounded-xl hover:bg-emerald-50 transition">
                            + Add Funds
                        </button>
                        <button className="flex-1 bg-emerald-700 text-white font-bold py-3 rounded-xl border border-emerald-500 hover:bg-emerald-600 transition">
                            Withdraw
                        </button>
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <p className="font-semibold">Linked Card</p>
                            <p className="text-sm text-slate-400">**** 4242</p>
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
                            <History size={24} />
                        </div>
                        <div>
                            <p className="font-semibold">Auto-Recharge</p>
                            <p className="text-sm text-slate-400">Disabled</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <History size={20} className="text-slate-400" />
                    Recent Transactions
                </h3>
                <div className="space-y-4">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="flex justify-between items-center border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${tx.type === "deposit" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                                    {tx.type === "deposit" ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{tx.status}</p>
                                    <p className="text-xs text-slate-400">{tx.date}</p>
                                </div>
                            </div>
                            <span className={`font-bold ${tx.type === "deposit" ? "text-emerald-400" : "text-white"}`}>
                                {tx.amount}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
