import React, { useState } from 'react';
import FertilizerCard from '../../components/FertilizerCard/FertilizerCard';
import { calculateNPK } from '../../utils/helper';
import { FlaskConical, Scale, Sparkles } from 'lucide-react';

const Fertilizer = () => {
  const [crop, setCrop] = useState('Wheat');
  const [soilType, setSoilType] = useState('Clay Loam');
  const [acres, setAcres] = useState('5');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const res = calculateNPK(crop, soilType, acres);
    setResult(res);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <span className="badge badge-amber">Soil Nutrition Telemetry</span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
          NPK & Fertilizer Dosage Calculator 🧪
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Prevent over-fertilization and maximize plant growth with precise Urea, DAP, and MOP dosage estimates.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '24px' }}>
        <form onSubmit={handleCalculate} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Target Crop Variety</label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <option>Wheat</option>
              <option>Rice</option>
              <option>Cotton</option>
              <option>Sugarcane</option>
              <option>Tomato</option>
              <option>Potato</option>
              <option>Corn</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Soil Category</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <option>Clay Loam</option>
              <option>Sandy Loam</option>
              <option>Black Soil</option>
              <option>Red Soil</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Field Size (Acres)</label>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={acres}
              onChange={(e) => setAcres(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <button type="submit" className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Calculate Precision NPK Dosage 🧪
            </button>
          </div>
        </form>
      </div>

      {result && <FertilizerCard result={result} />}
    </div>
  );
};

export default Fertilizer;
