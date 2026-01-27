import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import MainLayout from "../components/layout/MainLayout";

import Landing from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";

import Dashboard from "../pages/dashboard";
import Portfolio from "../pages/portfolio";
import Trades from "../pages/trades";
import AIAdvisor from "../pages/ai-advisor";
import Learning from "../pages/learning"; // ✅ ADD THIS

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "learning",
        element: <Learning />, // ✅ ADD THIS
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "trades",
        element: <Trades />,
      },
      {
        path: "ai-advisor",
        element: <AIAdvisor />,
      },
    ],
  },
]);

export default router;
