import { BellRing, Lock, MoonStar, UserCircle } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";
import SettingsPanel from "../components/settings/SettingsPanel";
import { settingsData } from "../data/mockUiData";

export default function Settings() {
  return (
    <AppLayout title="Settings" subtitle="Tune your profile, privacy, and notification experience.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SettingsPanel title="Profile" description="Keep your personal health profile current.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <UserCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{settingsData.profile.name}</p>
                  <p className="text-sm text-slate-500">{settingsData.profile.email}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <p className="text-sm font-medium text-slate-500">Phone</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{settingsData.profile.phone}</p>
            </div>
          </div>
        </SettingsPanel>

        <SettingsPanel title="Theme" description="Switch the workspace palette to match your mood.">
          <div className="space-y-3">
            {settingsData.themeOptions.map((theme) => (
              <label key={theme.value} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3 text-sm font-medium text-slate-700">
                <span>{theme.name}</span>
                <input type="radio" name="theme" defaultChecked={theme.active} />
              </label>
            ))}
          </div>
        </SettingsPanel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SettingsPanel title="Change password" description="Update your password and keep your account protected.">
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Lock className="h-4 w-4 text-blue-600" />
                Enter current password
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Lock className="h-4 w-4 text-blue-600" />
                Choose a new password
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-500">
              {settingsData.passwordRules.map((rule) => (
                <li key={rule} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {rule}
                </li>
              ))}
            </ul>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Update password
            </button>
          </div>
        </SettingsPanel>

        <SettingsPanel title="Notifications" description="Control what reminders and insights you receive.">
          <div className="space-y-3">
            {settingsData.notifications.map((item) => (
              <label key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3 text-sm font-medium text-slate-700">
                <span className="flex items-center gap-2">
                  <BellRing className="h-4 w-4 text-blue-600" />
                  {item.label}
                </span>
                <input type="checkbox" defaultChecked={item.enabled} />
              </label>
            ))}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MoonStar className="h-4 w-4 text-blue-600" />
                Night mode keeps the workspace calm after sunset.
              </div>
            </div>
          </div>
        </SettingsPanel>
      </div>
    </AppLayout>
  );
}