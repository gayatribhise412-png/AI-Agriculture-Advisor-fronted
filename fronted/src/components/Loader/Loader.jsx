import React from 'react';
import { Loader2, Sprout } from 'lucide-react';

const Loader = ({ text = "AI Telemetry Processing..." }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      padding: '3rem',
      gap: '1rem',
      color: '#34d399'
    }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} className="animate-spin" style={{ animation: 'spinSlow 2s linear infinite' }} />
        <span style={{ position: 'absolute', fontSize: '1.2rem' }}>🌾</span>
      </div>
      <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#94a3b8' }}>{text}</span>
    </div>
  );
};

export default Loader;
