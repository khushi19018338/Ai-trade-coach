import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import MainLayout from "../components/layout/MainLayout";

import Landing from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import Learning from "../pages/learning"; // Ensure this export exists
import StockDetail from "../pages/stock"; // Created newly

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
        element: <Learning />,
      },
      {
        path: "stock/:symbol",
        element: <StockDetail />,
      },
      // Previous pages like portfolio/trades are now part of the dashboard/drawers
      // so we remove their dedicated routes to force the "Single Dashboard" paradigm.
    ],
  },
]);

export default router;
