import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Shield, Globe, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '3rem 2rem 1.5rem 2rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '800' }}>
            <span style={{ fontSize: '1.5rem' }}>🌱</span>
            <span>Agri<span className="text-gradient">Smart AI</span></span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Next-Generation AI Intelligence Platform for Sustainable Agriculture, Crop Protection, Soil Telemetry, and Precision Farming. 🌾
          </p>
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1rem' }}>AI Solutions</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#94a3b8' }}>
            <li><Link to="/disease-detection" style={{ transition: 'color 0.2s' }}>Leaf Disease Scanner 🔍</Link></li>
            <li><Link to="/crop-advisor" style={{ transition: 'color 0.2s' }}>Smart Crop Selector 🌾</Link></li>
            <li><Link to="/fertilizer" style={{ transition: 'color 0.2s' }}>NPK Calculator 🧪</Link></li>
            <li><Link to="/pdf-analysis" style={{ transition: 'color 0.2s' }}>Soil Report Parser 📄</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1rem' }}>Quick Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#94a3b8' }}>
            <li><Link to="/dashboard">Farmer Dashboard 📊</Link></li>
            <li><Link to="/weather">Satellite Weather ⛅</Link></li>
            <li><Link to="/voice">Voice Assistant 🎙️</Link></li>
            <li><Link to="/history">Query Logs 📜</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1rem' }}>Agri Hotline & AI Support</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.8rem' }}>
            Direct Farmer Helpline: <strong>1800-AGRI-AI (24x7)</strong> 📞
          </p>
          <span className="badge badge-green">
            <Cpu size={12} /> AI Telemetry Active
          </span>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '2.5rem auto 0 auto',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexWrap: 'wrap',
        justify: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        color: '#64748b',
        fontSize: '0.85rem'
      }}>
        <span>© {new Date().getFullYear()} AgriSmart AI. Crafted with 💚 for Farmers Worldwide.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
