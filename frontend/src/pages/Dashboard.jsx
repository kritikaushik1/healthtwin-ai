import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import HealthScoreCard from "../components/dashboard/HealthScoreCard";
import RecentReportsCard from "../components/dashboard/RecentReportsCard";
import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";
import MedicineReminderCard from "../components/dashboard/MedicineReminderCard";
import HealthTrendChart from "../components/dashboard/HealthTrendChart";
import QuickActions from "../components/dashboard/QuickActions";
import { dashboardData } from "../data/mockUiData";

export default function Dashboard() {
  const navigate = useNavigate();
  const { token, logout } = useAuthStore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser(token);
        setUser(response.user);
      } catch (error) {
        toast.error("Session Expired");
        logout();
      }
    };

    if (token) {
      fetchUser();
    } else {
      setUser({ fullName: dashboardData.user.name, email: dashboardData.user.email });
    }
  }, [token, logout]);

  const displayName = user?.fullName || dashboardData.user.name;
  const displayEmail = user?.email || dashboardData.user.email;

  return (
    <AppLayout title={`Welcome, ${displayName}`} subtitle={displayEmail}>
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <WelcomeCard
          name={displayName}
          headline={dashboardData.welcome.headline}
          subtext={dashboardData.welcome.subtext}
          score={dashboardData.welcome.score}
        />
        <HealthScoreCard
          score={dashboardData.healthScore.score}
          trend={dashboardData.healthScore.trend}
          focus={dashboardData.healthScore.focus}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <HealthTrendChart data={dashboardData.trendData} />
        <RecentReportsCard reports={dashboardData.reports} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <AIRecommendationCard recommendations={dashboardData.recommendations} />
        <MedicineReminderCard reminders={dashboardData.medicineReminders} />
      </div>

      <QuickActions actions={dashboardData.quickActions} />

      <div className="flex justify-end">
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
        >
          Logout
        </button>
      </div>
    </AppLayout>
  );
}