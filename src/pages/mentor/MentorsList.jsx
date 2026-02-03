import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star, MessageCircle, Video } from "lucide-react";

export default function MentorsList() {
    const [searchTerm, setSearchTerm] = useState("");

    const mentors = [
        {
            id: 1,
            name: "Sarah Williams",
            specialty: "Options & Derivatives",
            rating: 4.9,
            reviews: 120,
            hourlyRate: "$50",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            status: "Online",
        },
        {
            id: 2,
            name: "Michael Chen",
            specialty: "Crypto & DeFi",
            rating: 4.8,
            reviews: 85,
            hourlyRate: "$45",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            status: "Offline",
        },
        {
            id: 3,
            name: "David Ross",
            specialty: "Long-term Investing",
            rating: 5.0,
            reviews: 200,
            hourlyRate: "$70",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            status: "Busy",
        },
        {
            id: 4,
            name: "Emily Clark",
            specialty: "Forex Trading",
            rating: 4.7,
            reviews: 50,
            hourlyRate: "$40",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            status: "Online",
        },
    ];

    const filteredMentors = mentors.filter((m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 text-white max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Find Your Mentor
                    </h2>
                    <p className="text-slate-400 mt-2">
                        Connect with top-rated experts for 1-on-1 guidance.
                    </p>
                </div>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-3.5 text-slate-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search mentors or skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor, index) => (
                    <motion.div
                        key={mentor.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover"
                                    />
                                    <span
                                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-slate-900 ${mentor.status === "Online"
                                                ? "bg-emerald-500"
                                                : mentor.status === "Busy"
                                                    ? "bg-red-500"
                                                    : "bg-slate-500"
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-cyan-400 transition">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-slate-400">{mentor.specialty}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded text-yellow-400 text-sm font-medium">
                                <Star size={14} fill="currentColor" />
                                {mentor.rating}
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm text-slate-400 mb-6 border-b border-slate-800 pb-4">
                            <span>{mentor.reviews} Reviews</span>
                            <span className="text-white font-semibold">{mentor.hourlyRate}/hr</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition">
                                <MessageCircle size={18} />
                                Chat
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition shadow-lg shadow-cyan-500/20">
                                <Video size={18} />
                                Book Call
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
