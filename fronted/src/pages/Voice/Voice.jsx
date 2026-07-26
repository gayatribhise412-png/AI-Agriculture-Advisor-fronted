import React from 'react';
import VoiceAssistant from '../../components/VoiceAssistant/VoiceAssistant';

const Voice = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Voice-Enabled Farm Companion 🎙️</h1>
        <p style={{ color: '#94a3b8' }}>
          Speak questions directly while working in your field and receive voice output answers.
        </p>
      </div>

      <VoiceAssistant />
    </div>
  );
};

export default Voice;
