import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Sun, Droplets, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      padding: '5rem 2rem 6rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 255, 157, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '0%',
        right: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(163, 230, 53, 0.12) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        <div>
          <div className="badge badge-green animate-pulse-glow" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            <span className="pulse-dot"></span> Next-Gen AI Precision Telemetry v2.4 🌾
          </div>

          <h1 style={{
            fontSize: 'calc(2.5rem + 1.4vw)',
            fontWeight: '800',
            lineHeight: '1.12',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Revolutionize Farm Yields with <span className="text-gradient">AI Crop Precision</span> 🌽
          </h1>

          <p style={{
            color: '#94a3b8',
            fontSize: '1.15rem',
            lineHeight: '1.75',
            marginBottom: '2.5rem'
          }}>
            Instant leaf disease detection 🔍, real-time satellite rain alerts ⛅, soil PDF report analysis 📄, and voice-assisted crop advisory 🎙️ engineered to empower progressive farmers.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem' }}>
            <Link to="/disease-detection" className="btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}>
              <Upload size={20} /> Scan Crop Disease Now
            </Link>
            <Link to="/chat" className="btn-secondary" style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}>
              Ask AI Advisor 🤖 <ArrowRight size={20} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.09)',
            paddingTop: '1.75rem'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#00ff9d', textShadow: '0 0 15px rgba(0,255,157,0.4)' }}>98.4%</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>AI Scan Precision</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fbbf24', textShadow: '0 0 15px rgba(251,191,36,0.4)' }}>50,000+</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>Active Farmers</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#38bdf8', textShadow: '0 0 15px rgba(56,189,248,0.4)' }}>24/7</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>Voice Advisory</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-media-card animate-float">
            <img src="/images/hero.jpg" alt="Smart agriculture field overview" />
            <div className="hero-overlay">
              <div className="hero-overlay-top">
                <span className="badge badge-green">Live data sync</span>
                <span className="hero-mini-chip">Updated 2 min ago</span>
              </div>
              <div className="hero-overlay-stats">
                <div className="hero-stat">
                  <Sun size={16} />
                  <strong>24°C</strong>
                  <span>Ideal</span>
                </div>
                <div className="hero-stat">
                  <Droplets size={16} />
                  <strong>78%</strong>
                  <span>Moisture</span>
                </div>
                <div className="hero-stat">
                  <Activity size={16} />
                  <strong>92%</strong>
                  <span>Health</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-mini-grid">
            <div className="glass-card hero-mini-card">
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>🌿</div>
              <div style={{ fontWeight: '800' }}>Smart irrigation</div>
              <div style={{ color: '#00ff9d', fontSize: '0.8rem', marginTop: '0.2rem' }}>Auto-scheduled</div>
            </div>
            <div className="glass-card hero-mini-card">
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>📡</div>
              <div style={{ fontWeight: '800' }}>Field alerts</div>
              <div style={{ color: '#fbbf24', fontSize: '0.8rem', marginTop: '0.2rem' }}>Real-time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
