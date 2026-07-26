import React from 'react';
import { Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react';

const AdvisoryCard = ({ title, category, description, urgency, actionText, onAction }) => {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="badge badge-green">
          <Lightbulb size={12} /> {category || 'Agri Insight'}
        </span>
        {urgency && (
          <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '700' }}>
            {urgency}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc' }}>{title}</h3>
      <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5', flex: 1 }}>
        {description}
      </p>

      {actionText && (
        <button
          onClick={onAction}
          className="btn-secondary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content', marginTop: '0.4rem' }}
        >
          {actionText} <ArrowRight size={14} />
        </button>
      )}
    </div>
  );
};

export default AdvisoryCard;
