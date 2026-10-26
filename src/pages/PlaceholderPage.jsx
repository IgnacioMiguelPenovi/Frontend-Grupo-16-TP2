import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/room.css';

export default function PlaceholderPage({ title, subtitle, name, avatar }) {
  return (
    <>
      <div 
        className="room min-vh-100 d-grid" 
        style={{ placeItems: 'center', padding: '90px 20px 40px' }}
      >
        <div
          className="panel"
          style={{
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            padding: '36px 24px',
            background: 'var(--paper)',
            borderRadius: '28px',
          }}
        >
          {/* Contenedor del Avatar */}
          <div style={{ marginBottom: '20px' }}>
            <img
              src={avatar || '/img/logo.png'}
              alt={`Avatar de ${name || 'usuario'}`}
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                margin: '0 auto',
                border: '4px solid var(--ink)',
                background: 'var(--yellow)',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Textos Informativos */}
          <h1 className="simpsons-title" style={{ fontSize: '2.4rem', margin: '0 0 10px' }}>
            {title}
          </h1>
          <p className="role" style={{ margin: '0 0 16px', display: 'inline-block' }}>
            {subtitle}
          </p>
          <p style={{ fontSize: '1.1rem', margin: '16px 0 28px', color: '#333' }}>
             El servidor dijo 'No vives de ensalada' y decidió que esta página tampoco vive aquí.
          </p>

          {/* Botonera de navegación */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                padding: '10px 22px',
                background: 'var(--yellow)',
                border: '3px solid var(--ink)',
                borderRadius: '999px',
                fontWeight: 800,
                fontFamily: 'var(--font-title)',
                fontSize: '1.1rem',
                textDecoration: 'none',
                boxShadow: '0 4px 0 var(--ink)',
              }}
            >
              ← Volver a La Casa
            </Link>
          </div>
        </div>
              <footer className="room-foot">
        <p>Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D'oh!</p>
      </footer>
      </div>

      

    </>
  );
}
