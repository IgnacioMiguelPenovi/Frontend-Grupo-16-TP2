import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EsterRoom from './rooms/EsterRoom'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/ester' element={<EsterRoom />} />
      </Routes>
      </BrowserRouter>    
  );
}

export default App;