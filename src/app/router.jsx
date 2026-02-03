import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import MainLayout from "../components/layout/MainLayout";

import Landing from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import StockDetail from "../pages/stock"; // Created newly
import MentorDashboard from "../pages/mentor/Dashboard";
import MentorOnboarding from "../pages/mentor/Onboarding";
import MentorsList from "../pages/mentor/MentorsList";
import Wallet from "../pages/dashboard/Wallet";

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
    path: "/mentor/onboarding",
    element: (
      <ProtectedRoute>
        <MentorOnboarding />
      </ProtectedRoute>
    ),
  },
  {
    path: "/mentor/dashboard",
    element: (
      <ProtectedRoute>
        <MentorDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/mentors",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <MentorsList />,
      },
    ],
  },
  {
    path: "/wallet",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Wallet />,
      },
    ],
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
        path: "stock/:symbol",
        element: <StockDetail />,
      },
    ],
  },
]);

export default router;
