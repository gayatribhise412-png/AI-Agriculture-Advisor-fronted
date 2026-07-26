import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import DiseaseCard from '../../components/DiseaseCard/DiseaseCard';
import Loader from '../../components/Loader/Loader';
import { analyzeDiseaseImage } from '../../services/disease';
import { Stethoscope, Sparkles, AlertCircle } from 'lucide-react';

const DiseaseDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageSelect = async (file) => {
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeDiseaseImage(file);
      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
          <Sparkles size={14} /> Computer Vision Telemetry 🔍
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>AI Crop Disease Diagnosis Engine 🌿</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.3rem' }}>
          Upload a clear photo of an infected leaf or stem to run immediate neural network diagnostic scans.
        </p>
      </div>

      <ImageUploader onImageSelect={handleImageSelect} isLoading={loading} />

      {loading && <Loader text="Analyzing leaf cellular patterns with Deep Learning AI..." />}

      {result && <DiseaseCard disease={result} />}
    </div>
  );
};

export default DiseaseDetection;
