import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Stethoscope,
  Sprout,
  FlaskConical,
  CloudSun,
  FileText,
  MessageSquare,
  Mic,
  History,
  User,
  Settings,
  ShieldAlert
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuGroups = [
    {
      title: "Core AI Features",
      items: [
        { path: '/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/disease-detection', label: 'Disease Scanner', icon: '🔍' },
        { path: '/crop-advisor', label: 'Crop Advisor', icon: '🌾' },
        { path: '/fertilizer', label: 'Fertilizers & Soil', icon: '🧪' },
        { path: '/weather', label: 'Weather Radar', icon: '⛅' },
        { path: '/pdf-analysis', label: 'PDF Soil Parser', icon: '📄' }
      ]
    },
    {
      title: "Interactive AI",
      items: [
        { path: '/chat', label: 'AI Farm Chat', icon: '🤖' },
        { path: '/voice', label: 'Voice Assistant', icon: '🎙️' },
        { path: '/history', label: 'Scan & Chat Logs', icon: '📜' }
      ]
    },
    {
      title: "Account",
      items: [
        { path: '/profile', label: 'Farm Profile', icon: '👨‍🌾' },
        { path: '/settings', label: 'Settings', icon: '⚙️' }
      ]
    }
  ];

  return (
    <aside className="glass-panel" style={{
      width: '260px',
      padding: '1.5rem 1rem',
      borderRadius: '0',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      background: 'rgba(15, 23, 42, 0.9)'
    }}>
      {menuGroups.map((group, idx) => (
        <div key={idx}>
          <h4 style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#64748b',
            marginBottom: '0.75rem',
            paddingLeft: '0.75rem'
          }}>
            {group.title}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {group.items.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      fontWeight: active ? '700' : '500',
                      color: active ? '#34d399' : '#94a3b8',
                      background: active ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                      border: active ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid transparent',
                      transition: 'var(--transition)'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div style={{
        marginTop: 'auto',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(30, 41, 59, 0.7) 100%)',
        padding: '1rem',
        borderRadius: '14px',
        border: '1px solid rgba(16, 185, 129, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#34d399', marginBottom: '0.3rem' }}>
          <span>🌾</span> Agri Premium Active
        </div>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' }}>
          Unlimited AI leaf diagnosis & satellite sensor telemetry.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
