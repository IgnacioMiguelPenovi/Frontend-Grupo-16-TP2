import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IgnacioRoom from './rooms/IgnacioRoom';
import EsterRoom from './rooms/EsterRoom';
import PlaceholderPage from './pages/PlaceholderPage';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import ElianaRoom from './rooms/ElianaRoom';
import Bitacora  from './pages/Bitacora';
import CelesteRoom from './rooms/CelesteRoom';

function App() {
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ignacio" element={<IgnacioRoom />} />
        <Route path="/ester" element={<EsterRoom />} />
        <Route path="/eliana" element={<ElianaRoom />} />
        <Route path="/celeste" element={<CelesteRoom />} />
        <Route path="/bitacora" element={<Bitacora />} />
  
        
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Sección en construcción"
              subtitle="Springfield 404"
              name="el equipo de Donuts & Code"
              avatar="/img/logo.png"
            />
          }
        />
      </Routes>

    </>
  );
}

export default App;