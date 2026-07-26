import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import DiseaseDetection from '../pages/DiseaseDetection/DiseaseDetection';
import CropAdvisor from '../pages/CropAdvisor/CropAdvisor';
import Fertilizer from '../pages/Fertilizer/Fertilizer';
import Weather from '../pages/Weather/Weather';
import PDFAnalysis from '../pages/PDFAnalysis/PDFAnalysis';
import Chat from '../pages/Chat/Chat';
import Voice from '../pages/Voice/Voice';
import History from '../pages/History/History';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Main Layout Routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />

      {/* Dashboard & AI App Layout Routes */}
      <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/disease-detection" element={<DashboardLayout><DiseaseDetection /></DashboardLayout>} />
      <Route path="/crop-advisor" element={<DashboardLayout><CropAdvisor /></DashboardLayout>} />
      <Route path="/fertilizer" element={<DashboardLayout><Fertilizer /></DashboardLayout>} />
      <Route path="/weather" element={<DashboardLayout><Weather /></DashboardLayout>} />
      <Route path="/pdf-analysis" element={<DashboardLayout><PDFAnalysis /></DashboardLayout>} />
      <Route path="/chat" element={<DashboardLayout><Chat /></DashboardLayout>} />
      <Route path="/voice" element={<DashboardLayout><Voice /></DashboardLayout>} />
      <Route path="/history" element={<DashboardLayout><History /></DashboardLayout>} />
      <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
    </Routes>
  );
};

export default AppRoutes;
