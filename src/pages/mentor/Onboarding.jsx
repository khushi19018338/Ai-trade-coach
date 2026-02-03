import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MentorOnboarding() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        experience: "",
        specialties: [],
        bio: "",
    });

    const specialtiesList = ["Stocks", "Crypto", "Options", "Forex", "Long-term Investing"];

    const toggleSpecialty = (item) => {
        setFormData((prev) => ({
            ...prev,
            specialties: prev.specialties.includes(item)
                ? prev.specialties.filter((s) => s !== item)
                : [...prev.specialties, item],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Submitting mentor profile:", formData);
        navigate("/mentor/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl"
            >
                <h2 className="text-3xl font-bold mb-2 text-cyan-400">Become a Mentor</h2>
                <p className="text-slate-400 mb-8">Share your expertise and earn by guiding others.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Years of Experience</label>
                        <input
                            type="number"
                            required
                            min="1"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                            placeholder="e.g. 5"
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Expertise (Select multiple)</label>
                        <div className="flex flex-wrap gap-2">
                            {specialtiesList.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => toggleSpecialty(item)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${formData.specialties.includes(item)
                                            ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                                            : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Bio / Introduction</label>
                        <textarea
                            required
                            rows="4"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition resize-none"
                            placeholder="Tell students about your trading style and success..."
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition transform hover:scale-[1.02]"
                    >
                        Complete Profile
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
