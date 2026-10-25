import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';
import GitHubProjects from '../components/GitHubProjects';

const DATOS_CELESTE = {
  nombre: 'Celeste',
  rol: 'Estudiante de Front End',
  bio: 'Casi no habla, pero sus commits siempre pasan los tests. Aprende más rápido que todos, duerme la siesta durante las daily y nunca suelta el chupete.',
  chips: ['📍 Caba', '🎂 39', 'HTML', 'CSS', 'React'],
  peliculas: [
    { titulo: 'Mujer bonita', detalle: '1990 · Te ves bellísima' },
    { titulo: 'Leyenda de pasión', detalle: '1994 · Esas personas se vuelven locas… o se convierten en leyendas' },
    { titulo: 'El secreto de sus ojos', detalle: '2009 · Pero hay una cosa que no puede cambiar, Benjamín… no puede cambiar de pasión' },
  ],
  discos: [
    { titulo: 'Sed', detalle: '2001 · Callejeros' },
    { titulo: 'Espejos', detalle: '2010 · Ciro y los persas' },
    { titulo: 'Por Colectora', detalle: '2006 · Las pastillas del abuelo' },
  ],
};

const FRASES_MAGGIE = [
  '🍼 Maggie succiona su chupete con aire de superioridad.',
  '🍼 Maggie derribó una torre de bloques sin despeinarse.',
  '🍼 Maggie te mira fijo. Sabe lo que hiciste.',
  '🍼 Maggie hizo "chup chup" y el mundo se calmó.',
  '🍼 Maggie está planeando algo. Siempre lo está.',
];

export default function CelesteRoom() {
  const [chupetes, setChupetes] = useState(0);
  const [frase, setFrase] = useState('Maggie está esperando su chupete...');

  const darChupete = () => {
    const random = FRASES_MAGGIE[Math.floor(Math.random() * FRASES_MAGGIE.length)];
    setChupetes(chupetes + 1);
    setFrase(random);
  };

  const reiniciar = () => {
    setChupetes(0);
    setFrase('Maggie está esperando su chupete...');
  };

  // Escenario SVG de Celeste
  const escenarioCeleste = (
    <svg
      className="stage"
      viewBox="0 0 1000 460"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="La habitación de Celeste, con Maggie Simpson, bloques de juguete y una ventana"
    >
      <defs>
        <pattern id="wall-celeste" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="#6bc5ff" />
          <circle cx="20" cy="20" r="6" fill="#9bdaff" />
          <circle cx="60" cy="60" r="6" fill="#9bdaff" />
        </pattern>
        <pattern id="floor-celeste" width="120" height="60" patternUnits="userSpaceOnUse">
          <rect width="120" height="60" fill="#c9a26b" />
          <path d="M0 0H120M0 30H120M60 0V30M0 30V60M120 30V60" stroke="#9c7647" strokeWidth="3" fill="none" />
        </pattern>
      </defs>

      <rect width="1000" height="340" fill="url(#wall-celeste)" />
      <rect y="340" width="1000" height="120" fill="url(#floor-celeste)" />
      <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />

      {/* Ventana */}
      <image className="window-day" href="/img/room-window.svg" x="760" y="50" width="200" height="211" />

            <image className="window-night" href="/img/room-window-night.svg" x="760" y="50" width="200" height="211" />
      <rect x="742" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" strokeWidth="3" />

      {/* Bloques de juguete */}
      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
        <rect x="170" y="340" width="60" height="60" fill="#e63946" />
        <rect x="236" y="340" width="60" height="60" fill="#ffd23f" />
        <rect x="203" y="280" width="60" height="60" fill="#4bb04a" />
        <text x="200" y="382" textAnchor="middle" fontSize="36" fontWeight="800" fill="#fff" stroke="none">A</text>
        <text x="266" y="382" textAnchor="middle" fontSize="36" fontWeight="800" fill="#1a1a1a" stroke="none">B</text>
        <text x="233" y="322" textAnchor="middle" fontSize="36" fontWeight="800" fill="#fff" stroke="none">C</text>
      </g>

      {/* Maggie */}
      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="500" cy="340" rx="85" ry="70" fill="#4a8fe0" />
        <circle cx="500" cy="200" r="90" fill="#ffd90f" />
        <path d="M500 105 L478 60 L505 95 L520 55 L528 108" fill="#4a8fe0" />
        <circle cx="468" cy="195" r="20" fill="#fff" />
        <circle cx="532" cy="195" r="20" fill="#fff" />
        <circle cx="472" cy="197" r="6" fill="#1a1a1a" stroke="none" />
        <circle cx="528" cy="197" r="6" fill="#1a1a1a" stroke="none" />
        <circle cx="500" cy="245" r="16" fill="#e63946" />
        <circle cx="500" cy="245" r="6" fill="#fff" stroke="none" />
      </g>
    </svg>
  );

  return (
    <RoomLayout roomClass="celeste" stage={escenarioCeleste} perfil={DATOS_CELESTE}>
      <GitHubProjects username={"mcdileonardo-alt"} />

      {/* Widget interactivo */}
      <div className="caja-dinamica">
        <h3>El chupete de Maggie</h3>
        <p>Dale chupetes a Maggie y mirá cómo reacciona. Chupetes dados: {chupetes}</p>
        <button className="boton secundario" id="boton-celeste" type="button" onClick={darChupete}>
          Dar chupete
        </button>{' '}
        <button className="boton secundario" type="button" onClick={reiniciar}>
          Reiniciar
        </button>
        <div className="resultado-dinamico" id="resultado-celeste" aria-live="polite">
          {frase}
        </div>
      </div>
    </RoomLayout>
  );
}