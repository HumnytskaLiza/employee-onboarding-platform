import Header from "../../ui/header";
import ChatHistory from "@/app/ui/chat/chat-history";
import { fetchChatHistory } from "@/lib/data";

export default async function Page() {
  const chats = await fetchChatHistory();
  return (
    <div>
      <Header name={"🤖 AI Assistant"} type="header" />
      <ChatHistory chats={chats} />
    </div>
  );
}
