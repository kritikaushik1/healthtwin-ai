import GlassPanel from "../ui/GlassPanel";

export default function ReportHistoryTable({ reports, onSelect }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">History</p>
          <h3 className="text-xl font-semibold text-slate-900">Report timeline</h3>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Report</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Summary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {reports.map((report) => (
              <tr key={report.id} className="cursor-pointer transition hover:bg-blue-50/70" onClick={() => onSelect(report)}>
                <td className="px-4 py-3 font-medium text-slate-800">{report.title}</td>
                <td className="px-4 py-3 text-slate-600">{report.type}</td>
                <td className="px-4 py-3 text-slate-600">{report.date}</td>
                <td className="px-4 py-3 text-slate-600">{report.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  );
}
