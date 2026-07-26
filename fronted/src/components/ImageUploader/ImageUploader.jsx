import React, { useState } from 'react';
import { UploadCloud, Image, CheckCircle, RefreshCw, Scan, Sparkles } from 'lucide-react';

const ImageUploader = ({ onImageSelect, isLoading }) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className="glass-panel"
      style={{
        border: dragOver ? '2px dashed #00ff9d' : '2px dashed rgba(0, 255, 157, 0.3)',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: dragOver ? 'rgba(0, 255, 157, 0.12)' : 'rgba(18, 30, 46, 0.7)',
        borderRadius: '24px',
        transition: 'var(--transition)'
      }}
    >
      <input
        type="file"
        accept="image/*"
        id="crop-image-upload"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {preview ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            position: 'relative',
            width: '260px',
            height: '200px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid #00ff9d',
            boxShadow: '0 0 25px rgba(0, 255, 157, 0.4)'
          }}>
            <img src={preview} alt="Crop sample" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* Futuristic Scanning Animation Line */}
            {isLoading && <div className="animate-scan-line"></div>}

            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#00ff9d',
              color: '#060d14',
              borderRadius: '50%',
              padding: '6px',
              display: 'flex',
              boxShadow: '0 0 10px #00ff9d'
            }}>
              <CheckCircle size={18} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <label htmlFor="crop-image-upload" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
              <RefreshCw size={15} /> Upload Different Crop Photo
            </label>
          </div>
        </div>
      ) : (
        <label htmlFor="crop-image-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(0, 255, 157, 0.15)',
            color: '#00ff9d',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 0 25px rgba(0, 255, 157, 0.3)'
          }}>
            <UploadCloud size={36} />
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: '#f8fafc' }}>
              Drop Infected Leaf or Crop Image 🌿
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '460px', margin: '0 auto' }}>
              Drag & drop clear close-up photo of leaf, fruit, or stem for automated neural network diagnosis
            </p>
          </div>

          <span className="btn-primary" style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
            <Image size={18} /> Browse Image File
          </span>
        </label>
      )}
    </div>
  );
};

export default ImageUploader;
