import React from 'react';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import { History as HistoryIcon, Search, Calendar } from 'lucide-react';

const History = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>AI Advisory History & Logs 📜</h1>
        <p style={{ color: '#94a3b8' }}>Review your past crop scans, fertilizer calculations, and AI chat sessions.</p>
      </div>

      <ChatHistory />
    </div>
  );
};

export default History;
