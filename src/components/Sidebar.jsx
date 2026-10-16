import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import '../styles/sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
  }

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Botón flotante para abrir la sidebar */}
      <button
        type="button"
        className="sidebar-toggle-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        <span className="sidebar-toggle-icon" aria-hidden="true">🍩</span>
        <span>Menú</span>
      </button>

      {/* Overlay oscuro */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menú lateral */}
      <aside
        className={`sidebar-panel ${isOpen ? 'is-open' : ''}`}
        aria-label="Menú de navegación del equipo"
      >
        {/* Encabezado con identidad del equipo */}
        <div className="sidebar-header">
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          <Link to="/" className="sidebar-brand" onClick={() => setIsOpen(false)}>
            <img src="/img/logo.png" alt="Logo de Donuts & Code" className="sidebar-logo" />
            <div className="sidebar-brand-text">
              <h2>Donuts &amp; Code</h2>
              <span>Springfield Dev Crew · TP2</span>
            </div>
          </Link>
        </div>

        {/* Lista de navegación */}
        <nav className="sidebar-nav">
          <div>
            <p className="sidebar-nav-group-title">Principal</p>
            <ul className="sidebar-nav-list">
              <SidebarItem label = "La Casa" to="/" onClick={() => setIsOpen(false)}/>
              <SidebarItem label = "Bitácora" to="/bitacora" onClick={() => setIsOpen(false)}/>
            </ul>
          </div>

          <div>
            <p className="sidebar-nav-group-title">Integrantes</p>
            <ul className="sidebar-nav-list">

              <SidebarItem label = "Ignacio" to="/ignacio" onClick={() => setIsOpen(false)}/>
              <SidebarItem label = "Ester" to="/ester" onClick={() => setIsOpen(false)}/>
              <SidebarItem label = "Eliana" to="/eliana" onClick={() => setIsOpen(false)}/>
              <SidebarItem label = "Celeste" to="/celeste" onClick={() => setIsOpen(false)}/>
            </ul>
          </div>

        </nav>

        {/* Pie de la sidebar */}
        <div className="sidebar-footer">
          <p style={{ margin: 0 }}>🍩 Frontend TP2 · 2026</p>
        </div>
      </aside>
    </>
  );
}
