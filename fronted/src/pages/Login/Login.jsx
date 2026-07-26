import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Sparkles, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('gayatri@farm.ai');
  const [password, setPassword] = useState('password123');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '440px',
        width: '100%',
        padding: '2.5rem',
        borderRadius: '24px',
        background: 'rgba(30, 41, 59, 0.8)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            margin: '0 auto 1rem auto',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '1.8rem'
          }}>
            👩‍🌾
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Welcome Back, Farmer!</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Access your AI farm telemetry & crop health diagnostics
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>
              Email / Farmer ID
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="farmer@agrismart.ai"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.4rem' }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? "Authenticating..." : "Sign In to Dashboard 🌾"}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
          Don't have a farm account?{' '}
          <Link to="/register" style={{ color: '#34d399', fontWeight: '700' }}>
            Register New Farm 🚜
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
