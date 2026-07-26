import React from 'react';
import { CloudSun, Wind, Droplets, Sun, Compass } from 'lucide-react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(30, 41, 59, 0.8) 100%)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <div>
          <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: '700' }}>📍 {weather.location}</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{weather.condition}</h3>
        </div>
        <div style={{ fontSize: '3rem' }}>⛅</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
        <div className="glass-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Temp</span>
          <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#f8fafc' }}>{weather.temperature}°C</div>
        </div>
        <div className="glass-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Humidity</span>
          <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#38bdf8' }}>{weather.humidity}%</div>
        </div>
        <div className="glass-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Wind</span>
          <div style={{ fontSize: '1rem', fontWeight: '800', color: '#cbd5e1' }}>{weather.windSpeed}</div>
        </div>
        <div className="glass-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Rain Prob</span>
          <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fbbf24' }}>{weather.rainfallProbability}</div>
        </div>
      </div>

      <h4 style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.75rem' }}>5-Day Agricultural Forecast</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
        {weather.forecast && weather.forecast.map((f, i) => (
          <div key={i} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.65rem', borderRadius: '10px', textAlign: 'center', fontSize: '0.75rem' }}>
            <div style={{ fontWeight: '700', color: '#94a3b8' }}>{f.day}</div>
            <div style={{ fontSize: '1.3rem', margin: '0.2rem 0' }}>{f.icon}</div>
            <div style={{ fontWeight: '700', color: '#34d399' }}>{f.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
