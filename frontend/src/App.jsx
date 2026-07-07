import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Reports from "./pages/Reports";
import AIChat from "./pages/AIChat";
import HealthTwin from "./pages/HealthTwin";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/auth/ProtectedRoute";
export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
    path="/onboarding"
    element={
      <ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    }
  />

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

      <Route
        path="/reports"
        element={<Reports />}
      />

      <Route
        path="/chat"
        element={<AIChat />}
      />

      <Route
        path="/health-twin"
        element={<HealthTwin />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

    </Routes>
  );
}