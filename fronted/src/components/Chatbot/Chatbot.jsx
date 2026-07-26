import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { Send, Bot, User, Sparkles, Trash2, Mic } from 'lucide-react';
import { QUICK_PROMPTS } from '../../utils/constants';

const Chatbot = () => {
  const { messages, isTyping, sendMessage, clearChat } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="glass-panel" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '650px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '1.2rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        background: 'rgba(15, 23, 42, 0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '1.4rem'
          }}>
            🤖
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700' }}>AgriSmart AI Assistant</h3>
            <span style={{ fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Sparkles size={12} /> Online & Ready to Advise 🌾
            </span>
          </div>
        </div>

        <button onClick={clearChat} className="btn-secondary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}>
          <Trash2 size={14} /> Clear Chat
        </button>
      </div>

      {/* Message List */}
      <div style={{
        flex: 1,
        padding: '1.5rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem'
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              gap: '0.85rem',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%'
            }}
          >
            {msg.sender === 'ai' && (
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                fontSize: '1.1rem',
                flexShrink: 0
              }}>
                🤖
              </div>
            )}

            <div style={{
              background: msg.sender === 'user' ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(30, 41, 59, 0.8)',
              color: msg.sender === 'user' ? '#ffffff' : '#f8fafc',
              padding: '1rem 1.25rem',
              borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
            }}>
              <div>{msg.text}</div>

              {msg.actionCards && msg.actionCards.map((card, idx) => (
                <div key={idx} style={{
                  marginTop: '0.8rem',
                  padding: '0.75rem',
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '10px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.85rem'
                }}>
                  <div style={{ fontWeight: '700', color: '#34d399' }}>{card.title}</div>
                  <div style={{ color: '#cbd5e1' }}>{card.detail}</div>
                </div>
              ))}

              <div style={{
                fontSize: '0.7rem',
                color: msg.sender === 'user' ? 'rgba(255, 255, 255, 0.7)' : '#64748b',
                marginTop: '0.4rem',
                textAlign: 'right'
              }}>
                {msg.timestamp} {msg.confidence && `• AI Confidence ${msg.confidence}`}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(245, 158, 11, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                fontSize: '1.1rem',
                flexShrink: 0
              }}>
                👨‍🌾
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontSize: '0.85rem' }}>
            <span>🤖 AI Advisor is analyzing agricultural telemetry...</span>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div style={{ padding: '0.5rem 1.5rem', display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
        {QUICK_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(prompt)}
            className="btn-secondary"
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', whiteSpace: 'nowrap', borderRadius: '12px' }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSubmit} style={{
        padding: '1rem 1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(15, 23, 42, 0.7)',
        display: 'flex',
        gap: '0.75rem'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about crop diseases, fertilizers, weather..."
          style={{
            flex: 1,
            background: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            color: '#f8fafc',
            fontSize: '0.95rem'
          }}
        />
        <button type="submit" className="btn-primary" style={{ borderRadius: '12px' }}>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
