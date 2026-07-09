import { UploadCloud } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function UploadReportCard({ title, description }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
          <UploadCloud className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-6 text-center">
        <p className="text-sm font-medium text-slate-700">Drop files here or browse</p>
        <p className="mt-2 text-sm text-slate-500">PNG, PDF, JPG, and plain text are supported.</p>
        <button className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Choose report
        </button>
      </div>
    </GlassPanel>
  );
}
