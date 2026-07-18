import GlassPanel from "../ui/GlassPanel";

export default function SettingsPanel({ title, description, children }) {
  return (
    <GlassPanel className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      {children}
    </GlassPanel>
  );
}
