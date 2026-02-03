import { useEffect, useState } from "react";
import API from "../../../services/api";
import { motion } from "framer-motion";

const Card = ({ title, value, change, sub }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg min-w-[200px]"
    >
        <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        <div className="flex items-center justify-between mt-2">
            <span className={`text-sm font-medium ${change?.startsWith("-") ? "text-red-400" : "text-green-400"}`}>
                {change}
            </span>
            {sub && <span className="text-xs text-slate-500">{sub}</span>}
        </div>
    </motion.div>
);

export default function DashboardSummary() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) API.get(`/dashboard/summary/${userId}`).then(setData).catch(console.error);
    }, []);

    if (!data) return <div className="animate-pulse h-32 bg-slate-900 rounded-xl"></div>;

    return (
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            <Card
                title="Virtual Portfolio Balance"
                value={`₹${data.totalValue?.toLocaleString()}`}
                change={`+${data.overallReturn}%`}
            />
            <Card
                title="Paper P&L (Today)"
                value={`₹${data.dailyPnL?.toLocaleString()}`}
                change={`${data.dailyPnLPercent > 0 ? "+" : ""}${data.dailyPnLPercent}%`}
            />
            <Card
                title="Active Simulations"
                value={data.activeTrades}
                sub="Open Paper Positions"
            />
            <Card
                title="Market Status"
                value={data.marketStatus}
                change={data.marketStatus === "OPEN" ? "● Live" : "○ Closed"}
            />
        </div>
    );
}
