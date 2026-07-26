import React from 'react';
import Hero from '../../components/Hero/Hero';
import AdvisoryCard from '../../components/AdvisoryCard/AdvisoryCard';
import { CROP_CATEGORIES, COMMON_DISEASES } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>AI Powered Capabilities</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>
            Complete <span className="text-gradient">Agricultural Intelligence</span> Suite 🌽
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
            Everything you need for sustainable precision farming, crop protection, and yield maximization.
          </p>
        </div>

        <div className="grid-3">
          <div className="glass-card">
            <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>AI Leaf Disease Scanner</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Upload any crop or leaf photo for instant computer-vision diagnostic scans, symptom mapping, and organic fungicide treatments.
            </p>
            <Link to="/disease-detection" className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
              Try Scanner <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass-card">
            <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>🧪</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>NPK & Soil Calculator</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Calculate precise Urea, DAP, and MOP dosage based on field area, soil type, and crop nutrient requirements.
            </p>
            <Link to="/fertilizer" className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
              Calculate Soil Dose <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass-card">
            <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>📄</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>PDF Soil Report Parser</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Drop your official lab PDF report to automatically extract pH levels, organic carbon, and recommended crop varieties.
            </p>
            <Link to="/pdf-analysis" className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
              Upload PDF Report <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-spotlight">
        <div className="feature-spotlight-card">
          <div className="feature-spotlight-media">
            <img src="/images/hero.jpg" alt="Smart agriculture dashboard" />
            <div className="feature-floating-badge">
              <span className="pulse-dot"></span> Live crop health 92%
            </div>
          </div>
          <div>
            <span className="badge badge-blue">Fresh farmer experience</span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '800', margin: '0.8rem 0 0.9rem' }}>
              A calmer, smarter way to manage every field
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
              From disease detection to irrigation planning, every insight is wrapped in a polished dashboard built for speed, clarity, and decision confidence.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={16} /> Real-time advisory cards tailored to your crop.</li>
              <li><CheckCircle2 size={16} /> Voice-guided support for hands-on field work.</li>
              <li><CheckCircle2 size={16} /> Seasonal planning with weather and disease alerts.</li>
            </ul>
            <Link to="/chat" className="btn-primary" style={{ marginTop: '1.2rem' }}>
              Explore AI Advisor <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
        <div className="new-feature-grid">
          <div className="new-feature-card">
            <img src="/images/crops/sample_crop.png" alt="Healthy crops" />
            <div>
              <h3>Seasonal crop coaching</h3>
              <p>Receive recommendations for sowing, nutrient timing, and disease prevention all in one place.</p>
            </div>
          </div>
          <div className="new-feature-card">
            <img src="/images/diseases/sample_disease.png" alt="Disease detection preview" />
            <div>
              <h3>Instant disease insight</h3>
              <p>Snap a leaf image and get a fast diagnosis plus organic treatment suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '4rem 2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-amber">Crop Ecosystem</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '0.4rem' }}>Supported Crop Categories 🌾</h2>
            </div>
            <Link to="/crop-advisor" className="btn-secondary">View Crop Advisor</Link>
          </div>

          <div className="grid-4">
            {CROP_CATEGORIES.map((cat) => (
              <div key={cat.id} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{cat.icon}</span>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>{cat.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#34d399' }}>{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Common Crop Disease Intelligence 🚨</h2>
          <p style={{ color: '#94a3b8' }}>Early warning alerts and remedies for top agricultural threats.</p>
        </div>

        <div className="grid-2">
          {COMMON_DISEASES.map((dis) => (
            <AdvisoryCard
              key={dis.id}
              title={`${dis.crop}: ${dis.name}`}
              category={dis.severity}
              description={`Symptoms: ${dis.symptoms}. Treatment: ${dis.treatment}`}
              actionText="Scan Your Crop Now"
              onAction={() => window.location.href = '/disease-detection'}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
