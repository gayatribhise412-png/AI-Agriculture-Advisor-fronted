import React, { useState } from 'react';
import { FileText, Upload, CheckCircle2, FileUp } from 'lucide-react';

const PDFUploader = ({ onPDFSelect, isLoading }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      onPDFSelect(selected);
    }
  };

  return (
    <div className="glass-panel" style={{
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
      border: '2px dashed rgba(56, 189, 248, 0.3)',
      background: 'rgba(30, 41, 59, 0.5)',
      borderRadius: '20px'
    }}>
      <input
        type="file"
        accept=".pdf"
        id="pdf-soil-upload"
        onChange={handleFile}
        style={{ display: 'none' }}
      />

      {file ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(56, 189, 248, 0.15)',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '1.8rem'
          }}>
            📄
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc' }}>{file.name}</h4>
            <span style={{ fontSize: '0.8rem', color: '#38bdf8' }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for Soil Parsing
            </span>
          </div>
          <label htmlFor="pdf-soil-upload" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
            Replace PDF Report
          </label>
        </div>
      ) : (
        <label htmlFor="pdf-soil-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(56, 189, 248, 0.15)',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <FileUp size={32} />
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem' }}>
              Upload Soil Test PDF Report 🧪
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              Upload official government or private lab soil test PDF for automatic N-P-K & micronutrient Extraction
            </p>
          </div>

          <span className="btn-secondary" style={{ marginTop: '0.5rem', fontSize: '0.85rem', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}>
            <FileText size={16} /> Choose PDF Document
          </span>
        </label>
      )}
    </div>
  );
};

export default PDFUploader;
