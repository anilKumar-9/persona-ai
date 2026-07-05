import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

function ChatPage() {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat Area */}
      <div className="flex-1">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatPage;
