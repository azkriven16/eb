import { ChatBot } from "@/components/chatbot";
import { pageMetadata } from "@/constants/metadata";

export const metadata = pageMetadata.chat;

export default function ChatPage() {
  return (
    <main>
      <ChatBot />
    </main>
  );
}
