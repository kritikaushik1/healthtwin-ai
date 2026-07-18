import { NavLink } from "react-router-dom";
import { Activity, FileText, LayoutDashboard, MessageCircleMore, Settings, Sparkles } from "lucide-react";

const navigation = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/chat", label: "AI Chat", icon: MessageCircleMore },
  { to: "/health-twin", label: "Health Twin", icon: Activity },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function AppLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_100%)] text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:p-8">
        <aside className="w-full rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[0_30px_90px_-40px_rgba(37,99,235,0.6)] backdrop-blur-xl lg:w-72">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white">
            <div className="rounded-xl bg-blue-500/25 p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">HealthTwin AI</p>
              <p className="text-xs text-slate-300">Care, simplified</p>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {navigation.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white">
            <p className="text-sm font-semibold">Daily focus</p>
            <p className="mt-2 text-sm text-blue-50">
              Keep your plan balanced and review your latest reports before noon.
            </p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <header className="rounded-[32px] border border-white/70 bg-white/70 p-5 shadow-[0_25px_80px_-35px_rgba(37,99,235,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Personal health workspace</p>
                <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
                <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                Live overview · Secure & private
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
