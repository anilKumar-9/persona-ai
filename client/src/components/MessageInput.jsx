import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useChat } from "../context/ChatContext";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useChat();

  const handleSend = async () => {
    const text = message.trim();

    if (!text || loading) return;

    await sendMessage(text);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="mx-auto flex max-w-4xl items-end gap-3">
      <textarea
        rows={1}
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          max-h-40
          flex-1
          resize-none
          rounded-xl
          border
          border-slate-700
          bg-slate-800
          px-4
          py-3
          text-white
          placeholder:text-slate-400
          outline-none
          focus:border-blue-500
        "
      />

      <button
        onClick={handleSend}
        disabled={!message.trim() || loading}
        className="
          rounded-xl
          bg-blue-600
          p-3
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:bg-slate-700
        "
      >
        <SendHorizontal size={20} className="text-white" />
      </button>
    </div>
  );
}

export default MessageInput;
