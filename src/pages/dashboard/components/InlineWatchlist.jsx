import { useEffect, useState } from "react";
import API from "../../../services/api";
import { Trash2 } from "lucide-react";

export default function InlineWatchlist({ onSelect }) {
    const [watchlist, setWatchlist] = useState([]);
    const [newSymbol, setNewSymbol] = useState("");

    useEffect(() => {
        loadWatchlist();
    }, []);

    const loadWatchlist = () => {
        API.get("/api/watchlist").then(setWatchlist).catch(console.error);
    };

    const handleAdd = async (e) => {
        if (e.key === "Enter" && newSymbol) {
            // Optimistic update or wait for API?
            // For mock, we assume success
            await API.post("/api/watchlist", { symbol: newSymbol });
            setWatchlist([...watchlist, { symbol: newSymbol.toUpperCase(), price: 0, change: 0 }]);
            setNewSymbol("");
        }
    };

    const handleRemove = async (symbol) => {
        await API.delete(`/api/watchlist/${symbol}`);
        setWatchlist(watchlist.filter(item => item.symbol !== symbol));
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-full">
            <h3 className="text-white font-bold mb-4 flex justify-between items-center">
                <span>Watchlist</span>
                <span className="text-xs text-slate-500">{watchlist.length} items</span>
            </h3>

            <div className="mb-4">
                <input
                    value={newSymbol}
                    onChange={(e) => setNewSymbol(e.target.value)}
                    onKeyDown={handleAdd}
                    placeholder="+ Add Symbol (Enter)"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {watchlist.map((item) => (
                    <div
                        key={item.symbol}
                        onClick={() => onSelect && onSelect(item.symbol)}
                        className="flex justify-between items-center p-2 hover:bg-slate-800 rounded cursor-pointer group"
                    >
                        <div>
                            <p className="font-bold text-white text-sm">{item.symbol}</p>
                            <p className="text-xs text-slate-500">Vol: 2.3M</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white text-sm">₹{item.price || "---"}</p>
                            <p className={`text-xs ${item.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {item.change ? `${item.change}%` : "--%"}
                            </p>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleRemove(item.symbol); }}
                            className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 transition ml-2"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
