import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bart from './pages/Bart';
import PlaceholderPage from './pages/PlaceholderPage';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bart" element={<Bart />} />
        <Route path='/ester' element={<EsterRoom />} />
        <Route
          path="/marge"
          element={
            <PlaceholderPage
              title="Habitación de Eliana"
              subtitle="Marge · Tech Lead"
              name="Eliana"
              avatar="/img/avatar-eliana.png"
            />
          }
        />
        <Route
          path="/maggie"
          element={
            <PlaceholderPage
              title="Habitación de Celeste"
              subtitle="Maggie · Junior Dev"
              name="Celeste"
              avatar="/img/avatar-celeste.png"
            />
          }
        />
        <Route
          path="/bitacora"
          element={
            <PlaceholderPage
              title="Bitácora de Donuts & Code"
              subtitle="Central nuclear de decisiones"
              name="el equipo de Donuts & Code"
              avatar="/img/tower.svg"
            />
          }
        />
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