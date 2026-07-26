import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { User, MapPin, Award, ShieldCheck, Sprout } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="glass-panel" style={{
        padding: '2.5rem',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(30, 41, 59, 0.8) 100%)',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          fontSize: '3rem',
          boxShadow: '0 8px 25px rgba(16, 185, 129, 0.35)'
        }}>
          {user ? user.avatar || '👩‍🌾' : '👩‍🌾'}
        </div>

        <div>
          <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
            <Award size={14} /> Verified Agricultural Practitioner
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800' }}>{user ? user.name : 'Gayatri Patel'}</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            {user ? user.email : 'gayatri@farm.ai'} • {user ? user.role : 'Lead Practitioner'}
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sprout color="#34d399" /> Registered Farm Specifications
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          <div className="glass-card">
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Farm Name</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>{user ? user.farmName : 'Sunrise Green Acres'}</div>
          </div>

          <div className="glass-card">
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Cultivated Area</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#34d399' }}>{user ? user.acres : 15} Acres</div>
          </div>

          <div className="glass-card">
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Geographic Zone</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#38bdf8' }}>{user ? user.location : 'Maharashtra Zone'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
