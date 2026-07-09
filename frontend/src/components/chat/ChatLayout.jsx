import { useState } from "react";
import { SendHorizonal, Mic } from "lucide-react";
import { motion } from "framer-motion";
import GlassPanel from "../ui/GlassPanel";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";
import VoiceButton from "./VoiceButton";

export default function ChatLayout({ initialMessages, suggestedQuestions, typingLabel }) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;

    const userMessage = { id: Date.now(), role: "user", text: draft.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "I’m using your latest wellness pattern to suggest a calm, focused plan for the next few hours.",
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <GlassPanel className="flex h-[640px] flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Conversation</p>
            <h3 className="text-xl font-semibold text-slate-900">Dr. Twin chat</h3>
          </div>
          <VoiceButton />
        </div>

        <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-2">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                {message.text}
              </div>
            </motion.div>
          ))}
          {isTyping ? <TypingIndicator label={typingLabel} /> : null}
        </div>

        <form onSubmit={handleSend} className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-2">
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask about your health plan..."
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
          />
          <button type="submit" className="rounded-2xl bg-blue-600 p-2 text-white transition hover:bg-blue-700">
            <SendHorizonal className="h-4 w-4" />
          </button>
        </form>
      </GlassPanel>

      <div className="space-y-6">
        <SuggestedQuestions questions={suggestedQuestions} />
        <GlassPanel className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
              <Mic className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Voice mode</p>
              <p className="text-sm text-slate-500">Speak naturally and let AI guide the conversation.</p>
            </div>
          </div>
          <button className="w-full rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
            Try voice prompt
          </button>
        </GlassPanel>
      </div>
    </div>
  );
}
