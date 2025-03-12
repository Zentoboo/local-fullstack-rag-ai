import { useState, useEffect } from 'react';

const STORAGE_KEY = 'rag_chat_history';

export const useChatHistory = () => {
  // Initialize state from localStorage if available
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Add a new message to the chat
  const addMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  // Clear all chat history
  const clearHistory = () => {
    setMessages([]);
  };

  return {
    messages,
    addMessage,
    clearHistory,
    setMessages
  };
};