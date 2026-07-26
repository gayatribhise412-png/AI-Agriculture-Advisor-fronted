import React, { useState } from 'react';
import { CROP_CATEGORIES } from '../../utils/constants';
import { Sprout, CheckCircle2, ArrowRight, Sun, Droplets } from 'lucide-react';

const CropAdvisor = () => {
  const [selectedSeason, setSelectedSeason] = useState('Kharif (Monsoon)');
  const [soilType, setSoilType] = useState('Clay Loam Soil');
  const [waterAvailability, setWaterAvailability] = useState('High (Canal / Borewell)');
  const [recommended, setRecommended] = useState(null);

  const handleRecommend = (e) => {
    e.preventDefault();
    setRecommended([
      { name: "Pusa Basmati Rice 🍚", yield: "24-28 Quintals/Acre", maturity: "115 Days", profit: "High 💵", suitability: "98% Match" },
      { name: "Bt Cotton (Hybrid) 🧵", yield: "12-15 Quintals/Acre", maturity: "160 Days", profit: "Very High 💰", suitability: "94% Match" },
      { name: "Hybrid Maize (Corn) 🌽", yield: "30-35 Quintals/Acre", maturity: "95 Days", profit: "Moderate 📈", suitability: "89% Match" }
    ]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <span className="badge badge-green">Smart Rotation Selector</span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
          Crop Selector & Rotation Advisor 🌾
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Select your local soil parameters, season, and water access to compute optimal high-profit crop choices.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '24px' }}>
        <form onSubmit={handleRecommend} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Farming Season</label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <option>Kharif (Monsoon - Jun to Oct)</option>
              <option>Rabi (Winter - Oct to Mar)</option>
              <option>Zaid (Summer - Mar to Jun)</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Soil Type</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <option>Clay Loam Soil</option>
              <option>Sandy Loam Soil</option>
              <option>Black Cotton Soil</option>
              <option>Alluvial River Soil</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>Water Availability</label>
            <select
              value={waterAvailability}
              onChange={(e) => setWaterAvailability(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <option>High (Canal / Borewell)</option>
              <option>Moderate (Drip Irrigation)</option>
              <option>Low (Rainfed / Dryland)</option>
            </select>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <button type="submit" className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Compute High Yield Crop Matches 🌾
            </button>
          </div>
        </form>
      </div>

      {recommended && (
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1.2rem' }}>AI Crop Matches for Your Field</h3>
          <div className="grid-3">
            {recommended.map((crop, idx) => (
              <div key={idx} className="glass-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="badge badge-green">{crop.suitability}</span>
                  <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700' }}>{crop.profit} Profit</span>
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.75rem' }}>{crop.name}</h4>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div>🌾 Estimated Yield: <strong style={{ color: 'white' }}>{crop.yield}</strong></div>
                  <div>⏳ Maturity Duration: <strong style={{ color: 'white' }}>{crop.maturity}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropAdvisor;
