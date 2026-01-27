import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AIChatBot from "../chatbot/AIChatBot";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-full bg-slate-950 text-white overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP NAVBAR (Logout lives here) */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-950">
          <Outlet />
        </main>
      </div>

      {/* Floating AI Chatbot */}
      {location.pathname.startsWith("/dashboard") && <AIChatBot />}
    </div>
  );
}
