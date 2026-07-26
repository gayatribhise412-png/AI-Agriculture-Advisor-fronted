import React from 'react';
import { AlertTriangle, ShieldCheck, Bug, Droplet, Sparkles } from 'lucide-react';

const DiseaseCard = ({ disease }) => {
  if (!disease) return null;

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
            <AlertTriangle size={12} /> {disease.severity}
          </span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>{disease.diseaseName}</h3>
          <span style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: '600' }}>
            Affecting: {disease.cropName}
          </span>
        </div>
        {disease.confidence && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            padding: '0.5rem 0.85rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#34d399' }}>{disease.confidence}%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>AI Confidence</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.2rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <Bug size={16} /> Observed Symptoms
          </h4>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            {Array.isArray(disease.symptoms) ? (
              disease.symptoms.map((s, i) => <li key={i}>{s}</li>)
            ) : (
              <li>{disease.symptoms}</li>
            )}
          </ul>
        </div>

        <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <ShieldCheck size={16} /> Biological / Organic Control
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
            {disease.organicControl || "Spray Neem oil 10,000 PPM @ 3ml/liter or apply bio-agent Trichoderma viride."}
          </p>
        </div>

        <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <Droplet size={16} /> Recommended Chemical Fungicide
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
            {disease.chemicalControl || disease.treatment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
