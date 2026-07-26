import React from 'react';
import Chatbot from '../../components/Chatbot/Chatbot';

const Chat = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>AI Agri Specialist Chat 🤖</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          Interactive 24x7 agronomic intelligence assistant trained on agricultural research papers.
        </p>
      </div>

      <Chatbot />
    </div>
  );
};

export default Chat;
