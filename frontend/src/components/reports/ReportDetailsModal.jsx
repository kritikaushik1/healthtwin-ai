import { X } from "lucide-react";

export default function ReportDetailsModal({ report, onClose }) {
  if (!report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/70 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">Report details</p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-900">{report.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">File reference</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{report.id}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Uploaded</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{report.date}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
            <p className="text-sm font-medium text-slate-500">Summary</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{report.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
