import axios from "axios";

// Change this when you deploy
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

/**
 * Send a message to the AI
 */
export const sendMessage = async (data) => {
  try {
    const response = await api.post("/chat", data);

    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);

    throw error;
  }
};

/**
 * Get all chat sessions
 */
export const getChats = async () => {
  try {
    const response = await api.get("/chats");

    return response.data;
  } catch (error) {
    console.error("Error fetching chats:", error);

    throw error;
  }
};

/**
 * Get messages of a specific chat
 */
export const getMessages = async (chatId) => {
  try {
    const response = await api.get(`/chats/${chatId}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);

    throw error;
  }
};

/**
 * Create a new chat
 */
export const createChat = async () => {
  try {
    const response = await api.post("/chats");

    return response.data;
  } catch (error) {
    console.error("Error creating chat:", error);

    throw error;
  }
};

/**
 * Delete a chat (optional)
 */
export const deleteChat = async (chatId) => {
  try {
    const response = await api.delete(`/chats/${chatId}`);

    return response.data;
  } catch (error) {
    console.error("Error deleting chat:", error);

    throw error;
  }
};
