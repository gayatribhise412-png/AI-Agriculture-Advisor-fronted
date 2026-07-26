import React, { useState } from 'react';
import PDFUploader from '../../components/PDFUploader/PDFUploader';
import Loader from '../../components/Loader/Loader';
import { uploadPDFReport } from '../../services/upload';
import { FileText, CheckCircle2, AlertTriangle, Sparkles, Sprout } from 'lucide-react';

const PDFAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);

  const handlePDFSelect = async (file) => {
    setLoading(true);
    setReportData(null);
    try {
      const data = await uploadPDFReport(file);
      setReportData(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <span className="badge badge-blue">Document OCR & AI Extraction</span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
          Soil Test PDF Lab Analysis 📄
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Upload your soil lab test PDF file to automatically parse key chemical parameters and generate tailored farm corrective plans.
        </p>
      </div>

      <PDFUploader onPDFSelect={handlePDFSelect} isLoading={loading} />

      {loading && <Loader text="Extracting soil chemical nutrients and pH levels from PDF..." />}

      {reportData && (
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-green">Lab Report Extracted Successfully</span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '0.4rem' }}>
                {reportData.fileName}
              </h2>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#94a3b8' }}>
              File Size: {reportData.fileSize}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>pH Reaction</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#34d399' }}>{reportData.phLevel}</div>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{reportData.phStatus}</span>
            </div>

            <div className="glass-card" style={{ padding: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Organic Carbon</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>{reportData.organicCarbon}</div>
            </div>

            <div className="glass-card" style={{ padding: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Nitrogen (N)</span>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f87171' }}>{reportData.nitrogenStatus}</div>
            </div>

            <div className="glass-card" style={{ padding: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Potassium (K)</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>{reportData.potassiumStatus}</div>
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '1.25rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#34d399', marginBottom: '0.6rem' }}>
              🌾 Highly Compatible Crop Choices
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {reportData.recommendedCrops.map((c, i) => (
                <span key={i} className="badge badge-green" style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}>{c}</span>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} color="#34d399" /> Soil Amending Action Plan
            </h4>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              {reportData.actionPlan.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFAnalysis;
