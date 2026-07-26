import React, { useEffect, useState } from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { fetchAgriWeather } from '../../services/weather';
import { CloudSun, Sun, Wind, Droplets, MapPin } from 'lucide-react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [locationInput, setLocationInput] = useState('Green Valley Agri-Zone');

  useEffect(() => {
    fetchAgriWeather(locationInput).then(setWeather);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAgriWeather(locationInput).then(setWeather);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <span className="badge badge-blue">Satellite Radar Telemetry</span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
          Agri Weather & Spraying Forecast ⛅
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Micro-climate forecasts, wind speeds, and rain probability designed specifically for pesticide spraying schedules.
        </p>
      </div>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Enter village, district, or PIN code..."
          style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}
        />
        <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
          Search Location 📍
        </button>
      </form>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Weather;
