import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import History from './pages/History';
import BmiInfo from './pages/BmiInfo';
import Landing from './pages/Landing';

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('bmi_client_id')) {
      const randomId = 'client_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('bmi_client_id', randomId);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen app-background flex flex-col font-sans text-gray-100">
        <Navbar />

        <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/history" element={<History />} />
            <Route path="/info" element={<BmiInfo />} />

            <Route path="/dashboard" element={<Navigate to="/calculator" replace />} />
            <Route path="/profile" element={<Navigate to="/calculator" replace />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
