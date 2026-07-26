import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { Clock, MessageSquare, ChevronRight, Tag } from 'lucide-react';

const ChatHistory = ({ onSelectHistory }) => {
  const { history } = useContext(ChatContext);

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
        <Clock size={18} color="#34d399" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Recent AI Consultations</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectHistory && onSelectHistory(item)}
            className="glass-card"
            style={{
              padding: '0.85rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MessageSquare size={16} color="#94a3b8" />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f8fafc' }}>{item.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', gap: '0.5rem', marginTop: '0.2rem' }}>
                  <span>{item.date}</span>
                  <span>•</span>
                  <span style={{ color: '#34d399' }}>{item.category}</span>
                </div>
              </div>
            </div>
            <ChevronRight size={16} color="#64748b" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
