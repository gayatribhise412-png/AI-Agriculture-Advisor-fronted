import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';
import { LogOut, Sparkles } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/disease-detection', label: 'Disease Scanner', icon: '🔍' },
    { path: '/crop-advisor', label: 'Crop Selector', icon: '🌾' },
    { path: '/fertilizer', label: 'NPK Soil', icon: '🧪' },
    { path: '/weather', label: 'Weather Radar', icon: '⛅' },
    { path: '/chat', label: 'AI Chat', icon: '🤖' }
  ];

  return (
    <nav className="agri-navbar">
      <Link to="/" className="nav-brand">
        <div className="brand-icon">🌱</div>
        <div>
          <span>Agri<span className="text-gradient">Smart AI</span></span>
          <div style={{ fontSize: '0.65rem', color: '#00ff9d', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '-2px' }}>
            <span className="pulse-dot"></span> Telemetry v2.4 Live
          </div>
        </div>
      </Link>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        {user ? (
          <div className="user-badge-nav">
            <span style={{ fontSize: '1.3rem' }}>{user.avatar || '👩‍🌾'}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#f8fafc' }}>{user.name}</span>
              <span style={{ fontSize: '0.7rem', color: '#00ff9d', fontWeight: '600' }}>{user.location || 'Agri Zone 3'}</span>
            </div>
            <Link to="/profile" className="btn-secondary" style={{ padding: '0.3rem 0.65rem', fontSize: '0.78rem', marginLeft: '0.4rem' }}>
              Profile
            </Link>
            <button onClick={logout} className="btn-secondary" style={{ padding: '0.35rem 0.55rem', color: '#f43f5e' }} title="Logout">
              <LogOut size={14} />
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn-secondary">Login</Link>
            <Link to="/register" className="btn-primary">
              <Sparkles size={16} /> Get Started Free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
