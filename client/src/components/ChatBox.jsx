import Message from "./Message";
import MessageInput from "./MessageInput";
import PersonaSelector from "./PersonaSelector";
import TypingIndicator from "./TypingIndicator";

import { useChat } from "../context/ChatContext";

function ChatBox() {
  const { messages, loading, persona } = useChat();

  const personaNames = {
    hitesh: "Hitesh Choudhary",
    piyush: "Piyush Garg",
  };

  const activePersona = personaNames[persona] || persona;

  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">
              AI Persona Chat
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Talking to:{" "}
              <span className="font-medium text-blue-400">{activePersona}</span>
            </p>
          </div>
          <PersonaSelector />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-900 p-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              role={message.role}
              content={message.content}
              persona={message.persona}
            />
          ))}

          <TypingIndicator loading={loading} />
        </div>
      </div>

      <div className="border-t border-slate-700 bg-slate-900 p-5">
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatBox;
