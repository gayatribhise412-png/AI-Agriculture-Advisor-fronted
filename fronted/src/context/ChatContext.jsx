import React, { createContext, useState } from 'react';
import { sendChatMessage } from '../services/chatbot';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: "welcome_1",
      sender: "ai",
      text: "🌾 **Welcome to AgriSmart AI Advisor!** I am your digital agricultural specialist. Ask me anything about crop diseases, weather risks, soil nutrition, or fertilizer schedules!",
      confidence: "100%",
      timestamp: "Just now"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([
    { id: "h1", title: "Yellow Rust Treatment in Wheat", date: "Today", category: "Disease" },
    { id: "h2", title: "Soil NPK Ratio for Clay Soil", date: "Yesterday", category: "Fertilizer" },
    { id: "h3", title: "Weekly Spraying Weather Window", date: "3 Days ago", category: "Weather" }
  ]);

  const sendMessage = async (userText) => {
    if (!userText.trim()) return;

    const userMsg = {
      id: "usr_" + Date.now(),
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const aiReply = await sendChatMessage(userText);
      setMessages((prev) => [...prev, aiReply]);
      
      // Update history log
      setHistory((prev) => [
        { id: "h_" + Date.now(), title: userText.slice(0, 32) + "...", date: "Just now", category: "Query" },
        ...prev
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome_fresh",
        sender: "ai",
        text: "🌱 **Chat history cleared.** How can I assist your farm operations today?",
        timestamp: "Just now"
      }
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, isTyping, history, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};
