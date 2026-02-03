import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, Users, Star } from "lucide-react";

export default function MentorDashboard() {
  const stats = [
    { title: "Earnings", value: "$1,250", icon: <DollarSign size={24} />, color: "text-emerald-400" },
    { title: "Sessions", value: "24", icon: <Users size={24} />, color: "text-blue-400" },
    { title: "Hours", value: "18.5", icon: <Clock size={24} />, color: "text-purple-400" },
    { title: "Rating", value: "4.9", icon: <Star size={24} />, color: "text-yellow-400" },
  ];

  const sessions = [
    { id: 1, student: "Alice Johnson", type: "Portfolio Review", time: "10:00 AM", status: "Upcoming" },
    { id: 2, student: "Mark Smith", type: "Strategy Session", time: "2:00 PM", status: "Pending" },
    { id: 3, student: "David Lee", type: "Basics of Options", time: "Yesterday", status: "Completed" },
  ];

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Mentor Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4"
          >
            <div className={`p-3 rounded-lg bg-slate-800 ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-slate-400 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Sessions */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Recent Sessions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800">
                <th className="p-3">Student</th>
                <th className="p-3">Type</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition">
                  <td className="p-3">{session.student}</td>
                  <td className="p-3 text-slate-300">{session.type}</td>
                  <td className="p-3 text-slate-400">{session.time}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        session.status === "Upcoming"
                          ? "bg-blue-500/20 text-blue-400"
                          : session.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-emerald-500/20 text-emerald-400"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {session.status === "Upcoming" && (
                      <button className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded text-sm transition">
                        Join
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
