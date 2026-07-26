import React, { useEffect, useState } from 'react';
import DashboardStats from '../../components/DashboardStats/DashboardStats';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import AdvisoryCard from '../../components/AdvisoryCard/AdvisoryCard';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import { fetchAgriWeather } from '../../services/weather';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Sparkles, Scan, FileUp, Mic, ArrowRight, ShieldCheck, Activity, MapPin } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchAgriWeather().then(setWeather);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Welcome Banner */}
      <div className="glass-panel" style={{
        padding: '2.5rem',
        borderRadius: '28px',
        background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.16) 0%, rgba(163, 230, 53, 0.08) 50%, rgba(18, 30, 46, 0.9) 100%)',
        border: '1px solid rgba(0, 255, 157, 0.35)',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.75rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)'
      }}>
        <div>
          <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
            <span className="pulse-dot"></span> Satellite Telemetry Online 🌾
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0.3rem 0', color: '#f8fafc' }}>
            Welcome Back, {user ? user.name : 'Farmer Gayatri'} 👩‍🌾
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="#00ff9d" /> Managing <strong style={{ color: '#00ff9d' }}>{user ? user.farmName : 'Sunrise Green Acres'}</strong> ({user ? user.acres : 15} Acres • Maharashtra Zone)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/disease-detection" className="btn-primary" style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}>
            <Scan size={18} /> Scan Leaf Health
          </Link>
          <Link to="/pdf-analysis" className="btn-secondary" style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}>
            <FileUp size={18} /> Soil PDF Analysis
          </Link>
        </div>
      </div>

      {/* Top Metrics Stats */}
      <DashboardStats />

      {/* Grid: Weather & Action Advisories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
        <WeatherCard weather={weather} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AdvisoryCard
            title="Yellow Rust Alert in Wheat Sector B4 🚨"
            category="High Priority Warning"
            urgency="Spray Within 48 Hours"
            description="Neural scan telemetry detected initial chlorotic rust lesions. Spray Propiconazole 25% EC @ 1ml/Liter immediately."
            actionText="Open Scan Protocol"
            onAction={() => window.location.href = '/disease-detection'}
          />

          <AdvisoryCard
            title="Optimal NPK Fertigation Schedule 🧪"
            category="Soil Nutrition Guidance"
            urgency="Tomorrow Morning Window"
            description="Soil moisture level (42%) is optimal for applying Urea split dose #2 to your Wheat crop."
            actionText="Calculate Soil Mix"
            onAction={() => window.location.href = '/fertilizer'}
          />
        </div>
      </div>

      {/* History & Voice Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        <ChatHistory />

        <div className="glass-panel" style={{
          padding: '2.5rem 2rem',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          justify: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12) 0%, rgba(18, 30, 46, 0.9) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.3)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🎙️</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem', color: '#f8fafc' }}>Voice Advisory Mode</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.75rem', maxWidth: '380px', lineHeight: '1.6' }}>
            Speak questions directly while working in your fields and receive real-time audio crop guidance.
          </p>
          <Link to="/voice" className="btn-primary" style={{ background: 'linear-gradient(135deg, #fbbf24, #d97706)', color: '#060d14', fontWeight: '800' }}>
            <Mic size={20} color="#060d14" /> Launch Voice Assistant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
