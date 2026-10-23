import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/home.css';
import '../styles/room.css';


export default function Home() {
  // Estado para abrir y cerrar el garage
  const [isGarageOpen, setIsGarageOpen] = useState(false);

  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isNight, setIsNight] = useState(() => {
    try {
      return localStorage.getItem('donuts-code:night-mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleGarage = () => {
    setIsGarageOpen((prev) => !prev);
  };

  const toggleNight = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    try {
      localStorage.setItem('donuts-code:night-mode', String(nextNight));
    } catch {
      // La portada sigue funcionando aunque el navegador no permita guardar preferencias.
    }
  };

  return (
    <div className={`home ${isNight ? 'is-night' : ''}`}>

      <main className="world">
        {/* 2 · EL CIELO */}
        <section className="sky" aria-labelledby="titulo">
          <button
            className="mode-toggle"
            type="button"
            id="mode-toggle"
            aria-pressed={isNight}
            onClick={toggleNight}
          >
            {isNight ? '☀️ Modo día' : '🌙 Modo noche'}
          </button>
          <div className="sun" aria-hidden="true"></div>
          <div className="clouds" aria-hidden="true">
            <i className="cloud" style={{ '--x': '4%', '--y': '14%', '--s': 1.5, '--t': '38s', '--dx': '70px', '--p': -0.5 }}></i>
            <i className="cloud" style={{ '--x': '62%', '--y': '8%', '--s': 1.1, '--t': '46s', '--dx': '-60px', '--p': -0.9 }}></i>
            <i className="cloud" style={{ '--x': '78%', '--y': '46%', '--s': 1.6, '--t': '52s', '--dx': '-80px', '--p': -0.3 }}></i>
            <i className="cloud" style={{ '--x': '-4%', '--y': '60%', '--s': 1.3, '--t': '44s', '--dx': '90px', '--p': -0.7 }}></i>
            <i className="cloud" style={{ '--x': '40%', '--y': '82%', '--s': 1.8, '--t': '60s', '--dx': '-50px', '--p': -0.4 }}></i>
          </div>

          <div className="hero">
            <img className="hero-logo" src="/img/logo.png" alt="Logo de Donuts &amp; Code" />
            <h1 id="titulo" className="simpsons-title">Donuts <em>&amp;</em> Code</h1>
            <p className="tagline">El grupo de programación más glaseado de Springfield.</p>
            <a className="go-down" href="#casa">
              Bajá a la casa <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* 3 · ATRAVESANDO LAS NUBES */}
        <section className="descent" aria-labelledby="proposito">
          <div className="clouds" aria-hidden="true">
            <i className="cloud" style={{ '--x': '6%', '--y': '8%', '--s': 1.2, '--t': '40s', '--dx': '60px', '--p': -0.6 }}></i>
            <i className="cloud" style={{ '--x': '70%', '--y': '20%', '--s': 1.7, '--t': '55s', '--dx': '-70px', '--p': -0.2 }}></i>
            <i className="cloud" style={{ '--x': '20%', '--y': '62%', '--s': 1.9, '--t': '48s', '--dx': '80px', '--p': -0.8 }}></i>
            <i className="cloud" style={{ '--x': '74%', '--y': '80%', '--s': 1.2, '--t': '42s', '--dx': '-60px', '--p': -0.4 }}></i>
          </div>

          <div className="about">
            <h2 id="proposito">Nuestro propósito</h2>
            <p>
              Somos cuatro compañeros de Frontend llevando nuestro proyecto grupal al siguiente nivel: <strong>una aplicación web SPA construida de punta a punta con React y Vite</strong>, organizada mediante componentes modulares, React Router y una sidebar compartida. En esta etapa integramos <strong>búsqueda sobre datos locales, consumo de APIs públicas con gestión de estados</strong> y la asistencia de <strong>herramientas de Inteligencia Artificial</strong> para potenciar el código y el diseño. <strong>La excusa sigue siendo programar con una dona en la mano</strong>; el objetivo, aprender haciendo en equipo.
            </p>
            <p className="about-note">Seguí bajando: la casa ya se ve entre las nubes.</p>
          </div>
        </section>

        {/* 4 · LA CASA */}
        <section className="town" id="casa" aria-labelledby="casa-t">
          <div className="town-head">
            <h2 id="casa-t" className="simpsons-title">742 Evergreen Terrace</h2>
            <p className="hint">Tocá una ventana para entrar a la habitación de cada integrante</p>
          </div>

          {/* Central nuclear */}
          <div className="skyline">
            <Link className="plant" to="/bitacora" aria-label="Bitácora: entrar a la central nuclear">
              <span className="smoke" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
              <img src="/img/tower.svg" alt="" />
              <span className="tag pill">☢ Bitácora</span>
            </Link>
          </div>

          <div className="scene">
            <div className="hills" aria-hidden="true"></div>

            <div className="house">
              {/* Ala principal: dos pisos */}
              <div className="wing main">
                <div className="roof" aria-hidden="true"><span className="chimney"></span></div>
                <div className="facade">
                  <div className="row up">
                    <Link className="window" data-room="ignacio" to="/ignacio" aria-label="Entrar a la habitación de Ignacio">
                      <span className="frame"><span className="glass"><img src="/img/avatar-ignacio.png" alt="" /></span></span>
                      <span className="name">Ignacio<small>Low level programing</small></span>
                    </Link>

                    <Link
                      className="window"
                      to="/ester"
                      aria-label="Entrar a la habitación de Ester"
                    >
                      <span className="frame">
                        <span className="glass">
                          <img src="/img/avatar-ester.png" alt="" />
                        </span>
                      </span>
                      <span className="name">Ester<small>Hype &amp; Hustle</small></span>
                    </Link>
                  </div>

                  <div className="row down">

                    <Link
                      className="window"
                      to="/eliana"
                      aria-label="Entrar a la habitación de Eliana"
                    >
                      <span className="frame">
                        <span className="glass">
                          <img src="/img/avatar-eliana.png" alt="" />
                        </span>
                      </span>
                      <span className="name">Eliana<small>Tech Lead</small></span>
                    </Link>

                    <div className="door" aria-hidden="true"><i className="knob"></i><i className="peephole"></i></div>

                    <Link
                      className="window"
                      to="/celeste"
                      aria-label="Entrar a la habitación de Celeste"
                    >
                      <span className="frame">
                        <span className="glass">
                          <img src="/img/avatar-celeste.png" alt="" />
                        </span>
                      </span>
                      <span className="name">Celeste<small>???</small></span>
                    </Link>

                  </div>
                </div>
              </div>

              {/* Garaje interactivo con estado de React */}
              <div className={`wing garage ${isGarageOpen ? 'is-open' : ''}`} id="garage" aria-label="Garaje: Homero, Moe y el Sr. Burns">
                <div className="gable">
                  <div className="attic"><img src="/img/logo.png" alt="" /></div>
                </div>
                <div className="facade">
                  <button
                    type="button"
                    className="garage-door"
                    id="garage-door"
                    aria-expanded={isGarageOpen}
                    aria-controls="garage-inside"
                    style={{ visibility: isGarageOpen ? 'hidden' : 'visible' }}
                    onClick={toggleGarage}
                  ></button>
                  <div
                    className="garage-inside"
                    id="garage-inside"
                    hidden={!isGarageOpen}
                    onClick={toggleGarage}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src="/img/garage-bar.jpg" alt="Homero, Moe y el Sr. Burns en el bar" />
                  </div>
                </div>
                <div className="driveway"></div>
              </div>
            </div>
          </div>

          <div className="lawn" aria-hidden='true'>
            <span className="sidewalk"></span>
            {/* CONTENEDOR DEL BUZÓN */}
            <div className="mailbox-wrapper">
              {/* Flecha rebotando */}
              {!isLetterOpen && (
                <div className="mailbox-arrow-hint">
                  <span>¡Abrime!</span>
                  <div className="arrow-icon">▼</div>
                </div>
              )}

              {/* Botón Buzón */}
              <button
                type="button"
                className="mailbox"
                onClick={() => setIsLetterOpen(!isLetterOpen)}
                title="Abrir buzón"
                aria-label="Abrir buzón de correo"
              >
                <span className={`mailbox-flag ${isLetterOpen ? 'up' : ''}`}></span>
              </button>

              {/* Carta secreta */}
              {isLetterOpen && (
                <div className="mailbox-letter">
                  <div className="letter-header">
                    <span className="letter-stamp">🍩✉️</span>
                    <button
                      type="button"
                      className="letter-close"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLetterOpen(false);
                      }}
                      title="Cerrar carta"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="letter-content">
                    📬 <strong>¡Nota secreta!</strong><br />
                    Si estás buscando a Homero, fijate en el garaje... 😉
                  </p>
                </div>
              )}
            </div>


          </div>
        </section>
      </main>

      {/* 5 · FOOTER */}
      <footer className="foot">
        <p>Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D'oh!</p>
      </footer>
    </div>
  );
}