import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Moon } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [language, setLanguage] = useState('English (US)');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Platform Settings ⚙️</h1>
        <p style={{ color: '#94a3b8' }}>Customize your notification alerts, language preferences, and AI sensor sync.</p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Crop Health SMS & Push Alerts 📲</h4>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Receive immediate notifications when disease risk spikes.</span>
          </div>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            style={{ width: '20px', height: '20px', accentColor: '#10b981' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Satellite Rain Warning Alerts ⛅</h4>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Get alerted 24h prior to heavy rainfall before pesticide spraying.</span>
          </div>
          <input
            type="checkbox"
            checked={weatherAlerts}
            onChange={(e) => setWeatherAlerts(e.target.checked)}
            style={{ width: '20px', height: '20px', accentColor: '#10b981' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Preferred Interface Language 🌐</h4>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Voice & UI localization.</span>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
          >
            <option>English (US)</option>
            <option>Hindi (हिंदी)</option>
            <option>Punjabi (ਪੰਜਾਬੀ)</option>
            <option>Gujarati (ਗੁਜਰਾਤੀ)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
