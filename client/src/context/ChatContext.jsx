import { createContext, useContext, useState } from "react";
import { sendMessage as sendMessageRequest } from "../services/api";

const ChatContext = createContext();

const initialWelcomeMessage = {
  id: 1,
  role: "assistant",
  content: "Hello! Select a persona and start chatting.",
};

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([initialWelcomeMessage]);
  const [persona, setPersona] = useState("hitesh");
  const [loading, setLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      title: "New Chat",
    },
  ]);

  const [currentChat, setCurrentChat] = useState(1);
  const [chatSessions, setChatSessions] = useState({
    1: [initialWelcomeMessage],
  });

  const saveCurrentChatMessages = (nextMessages) => {
    setChatSessions((prev) => ({
      ...prev,
      [currentChat]: nextMessages,
    }));
  };

  const sendMessage = async (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedText,
    };

    const nextMessages = [...messages, newMessage];
    setMessages(nextMessages);
    saveCurrentChatMessages(nextMessages);

    if (
      chatHistory.find((chat) => chat.id === currentChat)?.title === "New Chat"
    ) {
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === currentChat
            ? { ...chat, title: trimmedText.slice(0, 25) }
            : chat,
        ),
      );
    }

    setLoading(true);

    try {
      const response = await sendMessageRequest({
        persona,
        message: trimmedText,
      });

      const assistantReply =
        typeof response === "string"
          ? response
          : response?.message || "Sorry, I couldn't generate a response.";

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: assistantReply,
        persona,
      };

      const updatedMessages = [...nextMessages, assistantMessage];
      setMessages(updatedMessages);
      saveCurrentChatMessages(updatedMessages);
    } catch (error) {
      console.error("Error sending message:", error);

      const fallbackMessage = {
        id: Date.now() + 2,
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
        persona,
      };

      const updatedMessages = [...nextMessages, fallbackMessage];
      setMessages(updatedMessages);
      saveCurrentChatMessages(updatedMessages);
    } finally {
      setLoading(false);
    }
  };

  const newChat = () => {
    const chat = {
      id: Date.now(),
      title: "New Chat",
    };

    const welcomeMessage = {
      id: Date.now() + 1,
      role: "assistant",
      content: "Hello! How can I help you?",
    };

    setChatHistory((prev) => [chat, ...prev]);
    setCurrentChat(chat.id);
    setMessages([welcomeMessage]);
    setChatSessions((prev) => ({
      ...prev,
      [chat.id]: [welcomeMessage],
    }));
  };

  const selectChat = (chatId) => {
    setCurrentChat(chatId);

    const storedMessages = chatSessions[chatId] || [initialWelcomeMessage];
    setMessages(storedMessages);
  };

  const deleteChat = (chatId) => {
    const remainingHistory = chatHistory.filter((chat) => chat.id !== chatId);
    const remainingSessions = { ...chatSessions };
    delete remainingSessions[chatId];

    setChatHistory(remainingHistory);
    setChatSessions(remainingSessions);

    if (chatId === currentChat) {
      if (remainingHistory.length > 0) {
        const fallbackChat = remainingHistory[0];
        setCurrentChat(fallbackChat.id);
        setMessages(
          remainingSessions[fallbackChat.id] || [initialWelcomeMessage],
        );
      } else {
        newChat();
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,

        persona,
        setPersona,

        loading,
        setLoading,

        chatHistory,
        currentChat,
        selectChat,
        deleteChat,

        sendMessage,
        newChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
