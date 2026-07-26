import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: 'Gayatri Patel',
    email: 'gayatri@farm.ai',
    farmName: 'Sunrise Green Acres',
    acres: '15',
    location: 'Maharashtra Cotton Belt',
    password: 'password123'
  });
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '500px',
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
            background: 'linear-gradient(135deg, #84cc16, #65a30d)',
            margin: '0 auto 1rem auto',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '1.8rem'
          }}>
            🚜
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Register Your Farm</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Join 50,000+ practitioners benefiting from precision AI crop advice
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Farm Name</label>
              <input
                type="text"
                required
                value={formData.farmName}
                onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Total Land (Acres)</label>
              <input
                type="number"
                required
                value={formData.acres}
                onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? "Registering..." : "Create Farm Account 🌾"}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#34d399', fontWeight: '700' }}>
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
