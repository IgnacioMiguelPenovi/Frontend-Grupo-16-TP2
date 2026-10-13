import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/room.css';

export default function PlaceholderPage({ title, subtitle, name, avatar }) {
  return (
    <div className="room" style={{ display: 'grid', placeItems: 'center', minHeight: '100svh', padding: '90px 20px 40px' }}>
      <header className="topbar">
        <Link className="brand" to="/">
          <img src="/img/logo.png" alt="" />
          <span>Donuts &amp; Code</span>
        </Link>
        <nav aria-label="Principal">
          <Link to="/">← La casa</Link>
          <Link to="/bart">Bart</Link>
        </nav>
      </header>

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
        <div style={{ marginBottom: '20px' }}>
          <img
            src={avatar || '/img/logo.png'}
            alt=""
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

        <h1 className="simpsons-title" style={{ fontSize: '2.4rem', margin: '0 0 10px' }}>
          {title}
        </h1>
        <p className="role" style={{ margin: '0 0 16px', display: 'inline-block' }}>
          {subtitle}
        </p>
        <p style={{ fontSize: '1.1rem', margin: '16px 0 28px', color: '#333' }}>
          Esta sección será portada a React por <strong>{name}</strong> como parte de los próximos avances del TP2.
        </p>

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
          <Link
            to="/bart"
            style={{
              padding: '10px 22px',
              background: 'var(--pink)',
              color: '#fff',
              border: '3px solid var(--ink)',
              borderRadius: '999px',
              fontWeight: 800,
              fontFamily: 'var(--font-title)',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 0 var(--ink)',
            }}
          >
            🛹 Ir a la habitación de Bart
          </Link>
        </div>
      </div>
    </div>
  );
}
