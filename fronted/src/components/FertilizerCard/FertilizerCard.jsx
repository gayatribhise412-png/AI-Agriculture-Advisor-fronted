import React from 'react';
import { FlaskConical, Scale, Sparkles, Check } from 'lucide-react';

const FertilizerCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(132, 204, 22, 0.08) 0%, rgba(30, 41, 59, 0.8) 100%)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #84cc16, #65a30d)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          fontSize: '1.4rem'
        }}>
          🧪
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Custom Soil NPK Fertilizer Mix</h3>
          <span style={{ fontSize: '0.8rem', color: '#a3e635' }}>Precision Dose Calculated</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', borderColor: 'rgba(16, 185, 129, 0.4)' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Urea (Nitrogen)</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#34d399' }}>{result.ureaKg} kg</div>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>46% N Content</span>
        </div>

        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>DAP (Phosphorus)</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fbbf24' }}>{result.dapKg} kg</div>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>18:46:0 Grade</span>
        </div>

        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MOP (Potassium)</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#38bdf8' }}>{result.mopKg} kg</div>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>60% K₂O Content</span>
        </div>
      </div>

      <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h4 style={{ fontSize: '0.9rem', color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Sparkles size={14} color="#84cc16" /> Application Schedule & Tips
        </h4>
        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
          {result.recommendation}
        </p>
      </div>
    </div>
  );
};

export default FertilizerCard;
