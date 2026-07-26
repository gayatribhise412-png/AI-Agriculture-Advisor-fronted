import React, { useEffect, useContext } from 'react';
import { useVoice } from '../../hooks/useVoice';
import { ChatContext } from '../../context/ChatContext';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, Radio } from 'lucide-react';

const VoiceAssistant = () => {
  const { isListening, transcript, isSpeaking, startListening, stopListening, speakText, stopSpeaking } = useVoice();
  const { sendMessage, messages } = useContext(ChatContext);

  useEffect(() => {
    if (!isListening && transcript.trim()) {
      sendMessage(transcript);
    }
  }, [isListening, transcript]);

  const handleReadLatest = () => {
    const aiMsgs = messages.filter(m => m.sender === 'ai');
    if (aiMsgs.length > 0) {
      speakText(aiMsgs[aiMsgs.length - 1].text);
    }
  };

  return (
    <div className="glass-panel" style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.75rem',
      background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.08) 0%, rgba(18, 30, 46, 0.9) 100%)',
      borderRadius: '28px'
    }}>
      <div className="badge badge-green">
        <Radio size={14} /> Voice Command Telemetry Active 🎙️
      </div>

      <div style={{ position: 'relative', margin: '1rem 0' }}>
        <button
          onClick={isListening ? stopListening : startListening}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: isListening
              ? 'linear-gradient(135deg, #f43f5e, #e11d48)'
              : 'linear-gradient(135deg, #00ff9d, #059669)',
            color: '#060d14',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '2.4rem',
            boxShadow: isListening ? '0 0 45px rgba(244, 63, 94, 0.7)' : '0 0 40px rgba(0, 255, 157, 0.5)',
            animation: isListening ? 'wavePulse 1.5s infinite' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {isListening ? <MicOff size={42} color="#ffffff" /> : <Mic size={42} />}
        </button>
      </div>

      <div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.4rem', color: '#f8fafc' }}>
          {isListening ? "Listening to your farm query..." : "Tap Microphone to Speak"}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '420px' }}>
          Ask in natural speech about pest management, fertilizer ratios, or rain schedules. 🌾
        </p>
      </div>

      {transcript && (
        <div style={{
          background: 'rgba(10, 18, 28, 0.9)',
          padding: '1.2rem 1.75rem',
          borderRadius: '16px',
          border: '1px solid rgba(0, 255, 157, 0.4)',
          maxWidth: '520px',
          fontSize: '1rem',
          boxShadow: '0 4px 20px rgba(0, 255, 157, 0.2)'
        }}>
          <span style={{ color: '#00ff9d', fontWeight: '800' }}>Recognized Voice: </span>
          <span style={{ fontStyle: 'italic', color: '#f8fafc' }}>"{transcript}"</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={isSpeaking ? stopSpeaking : handleReadLatest}
          className="btn-secondary"
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
        >
          {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
          {isSpeaking ? "Stop Audio Response" : "Listen to Latest AI Answer"}
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
