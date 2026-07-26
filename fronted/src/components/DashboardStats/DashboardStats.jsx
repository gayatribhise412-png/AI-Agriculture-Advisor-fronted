import React from 'react';
import { Sprout, AlertCircle, Droplets, Sun, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    { title: "Active Farm Crops", value: "4 Varieties", sub: "Wheat, Tomato, Corn, Cotton", icon: "🌾", color: "#34d399" },
    { title: "Health Index", value: "94.2%", sub: "+3.5% vs last week", icon: "🌿", color: "#84cc16" },
    { title: "Soil Moisture", value: "42% (Optimal)", sub: "Next watering in 3 days", icon: "💧", color: "#38bdf8" },
    { title: "Pending Alerts", value: "1 Warning", sub: "Yellow Rust Early Notice", icon: "🚨", color: "#fbbf24" }
  ];

  return (
    <div className="grid-4">
      {stats.map((s, idx) => (
        <div key={idx} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            fontSize: '1.6rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {s.icon}
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{s.title}</span>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: s.color }}>{s.value}</div>
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
