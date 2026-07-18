import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlassPanel from "../ui/GlassPanel";

export default function QuickActions({ actions }) {
  return (
    <GlassPanel className="space-y-4">
      <div>
        <p className="text-sm font-medium text-slate-500">Quick actions</p>
        <h3 className="text-xl font-semibold text-slate-900">Jump back in</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {actions.map((action) => (
          <Link key={action.title} to={action.path} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-blue-200 hover:bg-blue-50/70">
            <p className="font-semibold text-slate-900">{action.title}</p>
            <p className="mt-2 text-sm text-slate-500">{action.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
              Open <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </GlassPanel>
  );
}
