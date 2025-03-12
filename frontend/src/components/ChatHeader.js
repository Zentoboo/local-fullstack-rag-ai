import React from 'react';

const ChatHeader = ({ onClearHistory }) => {
  return (
    <div className="chat-header">
      <h1>RAG Chatbot</h1>
      <div className="chat-actions">
        <button 
          className="clear-button" 
          onClick={onClearHistory}
          title="Clear chat history"
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
