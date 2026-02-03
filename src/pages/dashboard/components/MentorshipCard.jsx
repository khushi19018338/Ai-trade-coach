import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export default function MentorshipCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-xl"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <Users size={24} />
                </div>
                <span className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded">
                    New
                </span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-white">Expert Mentorship</h3>
            <p className="text-sm text-slate-400 mb-6">
                Get 1-on-1 guidance from verified trading experts. Improve your strategy today.
            </p>

            <Link
                to="/mentors"
                className="flex items-center justify-between w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition"
            >
                <span>Find a Mentor</span>
                <ArrowRight size={18} />
            </Link>
        </motion.div>
    );
}
