import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

function ChatPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-900 text-white md:flex-row">
      <Sidebar />

      <div className="min-h-0 flex-1">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatPage;
