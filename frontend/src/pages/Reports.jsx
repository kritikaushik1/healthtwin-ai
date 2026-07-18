import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import UploadReportCard from "../components/reports/UploadReportCard";
import ReportHistoryTable from "../components/reports/ReportHistoryTable";
import ReportDetailsModal from "../components/reports/ReportDetailsModal";
import AISummaryCard from "../components/reports/AISummaryCard";
import { reportsData } from "../data/mockUiData";

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <AppLayout title="Reports" subtitle="Upload and review your latest medical documents in a secure workspace.">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <UploadReportCard title={reportsData.uploadCard.title} description={reportsData.uploadCard.description} />
        <AISummaryCard summary={reportsData.summary} />
      </div>

      <ReportHistoryTable reports={reportsData.history} onSelect={setSelectedReport} />
      <ReportDetailsModal report={selectedReport} onClose={() => setSelectedReport(null)} />
    </AppLayout>
  );
}