import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SanValentin from './pages/SanValentin';
import Anniversary from './pages/Anniversary';
import Mensaje from './pages/Mensaje';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/san-valentin" replace />} />
        <Route path="/san-valentin" element={<SanValentin />} />
        <Route path="/mensaje" element={<Mensaje />} />
        <Route path="/1-ano" element={<Anniversary />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  )
}

export default App
