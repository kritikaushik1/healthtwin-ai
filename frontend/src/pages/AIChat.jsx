import AppLayout from "../components/layout/AppLayout";
import ChatLayout from "../components/chat/ChatLayout";
import { chatData } from "../data/mockUiData";

export default function AIChat() {
  return (
    <AppLayout title="AI Chat" subtitle="Get guidance from your personalized wellness assistant.">
      <ChatLayout
        initialMessages={chatData.initialMessages}
        suggestedQuestions={chatData.suggestedQuestions}
        typingLabel={chatData.typingLabel}
      />
    </AppLayout>
  );
}