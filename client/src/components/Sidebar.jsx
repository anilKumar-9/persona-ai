import { MessageSquarePlus, Trash2 } from "lucide-react";
import { useChat } from "../context/ChatContext";

function Sidebar() {
  const { chatHistory, currentChat, selectChat, deleteChat, newChat } =
    useChat();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-700 bg-slate-950">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold text-blue-400">AI Persona Chat</h1>

        <p className="mt-1 text-sm text-slate-400">
          Chat with different AI personas
        </p>
      </div>

      <div className="p-4">
        <button
          onClick={newChat}
          className="
            flex w-full items-center justify-center gap-2
            rounded-lg bg-blue-600 px-4 py-3
            font-medium transition
            hover:bg-blue-700
          "
        >
          <MessageSquarePlus size={20} />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Recent Chats
        </h2>

        <div className="space-y-2">
          {chatHistory.map((chat) => (
            <div key={chat.id} className="flex items-center gap-2">
              <button
                onClick={() => selectChat(chat.id)}
                className={`
                  flex-1 rounded-lg p-3 text-left transition
                  ${
                    currentChat === chat.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }
                `}
              >
                <p className="truncate text-sm">{chat.title}</p>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
                className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
                aria-label={`Delete ${chat.title}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-700 p-4">
        <p className="text-center text-xs text-slate-500">
          Built with React + Tailwind
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
