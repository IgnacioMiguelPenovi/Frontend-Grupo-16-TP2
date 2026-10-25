import React, { useState } from 'react';
import VisitRooms from './VisitRooms';
import NightModeToggle from './NightModeToggle';

export default function RoomLayout({
  roomClass, // 'ester', 'ignacio', 'eliana', 'celeste'
  stage,     // El SVG particular de la habitación
  perfil,    // { nombre, rol, bio, chips, peliculas, discos }
  children   // El widget interactivo (Pizarra, peinado, juego o dato curioso)
}) {
  const [isNight, setIsNight] = useState(() => {
    try {
      return localStorage.getItem('donuts-code:night-mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleNight = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    try {
      localStorage.setItem('donuts-code:night-mode', String(nextNight));
    } catch {
      // La habitación funciona aunque el navegador no permita guardar preferencias.
    }
  };

  return (
    <div className={`room ${roomClass} ${isNight ? 'is-night' : ''}`}>
      <main className="room-main">
        {/* 2. Escenario del personaje */}
        <div className="stage-frame">
          {stage}
        </div>

        {/* 3. Datos del perfil */}
        <section className="profile" aria-labelledby="nombre-perfil">
          <div className="who">
            <h1 id="nombre-perfil" className="simpsons-title">{perfil.nombre}</h1>
            <p className="role">{perfil.rol}</p>
            <p className="bio">{perfil.bio}</p>
            <ul className="chips" aria-label="Etiquetas">
              {perfil.chips.map((chip, index) => (
                <li key={index}>{chip}</li>
              ))}
            </ul>
          </div>

          <div className="lists">
            <article className="panel movies">
              <h2><span aria-hidden="true">🎬</span> Películas favoritas</h2>
              <ol>
                {perfil.peliculas.map((peli, index) => (
                  <li key={index}>
                    <div>
                      <strong>{peli.titulo}</strong>
                      <small>{peli.detalle}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="panel songs">
              <h2><span aria-hidden="true">🎵</span> Discos favoritos</h2>
              <ol>
                {perfil.discos.map((disco, index) => (
                  <li key={index}>
                    <div>
                      <strong>{disco.titulo}</strong>
                      <small>{disco.detalle}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        {/* 4. Widget o actividad interactiva propia */}
        {children}

        {/* 5. Links a otras habitaciones */}
        <VisitRooms currentRoomId={roomClass} />
      </main>

      <div className="room-mode-control">
        <NightModeToggle className="room-mode-toggle" isNight={isNight} onToggle={toggleNight} />
      </div>

      {/* 6. Pie de página */}
      <footer className="room-foot">
        <p>Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D'oh!</p>
      </footer>
    </div>
  );
}
