import { Mic } from "lucide-react";

export default function VoiceButton() {
  return (
    <button className="rounded-full border border-blue-200 bg-blue-50 p-3 text-blue-600 transition hover:bg-blue-100">
      <Mic className="h-4 w-4" />
    </button>
  );
}
