import React from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';
import GitHubProjects from '../components/GitHubProjects';
import CelesteJuego from '../components/CelesteJuego';

const DATOS_CELESTE = {
  nombre: 'María Celeste Di Leonardo',
  rol: 'Junior Dev · Chupete-Driven Development',
  bio: 'Casi no habla, pero sus commits siempre pasan los tests. Aprende más rápido que todos, duerme la siesta durante las daily y nunca suelta el chupete.',
  chips: ['📍 Caba', '🎂 39 años', 'Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'React'],
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

export default function CelesteRoom() {
  const escenarioCeleste = (
    <svg
      className="stage"
      viewBox="0 0 1000 460"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="La habitación de Celeste, sentada en su cuna, con bloques de juguete y una ventana"
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
        <pattern id="bars-celeste" width="26" height="460" patternUnits="userSpaceOnUse">
          <rect x="9" width="8" height="460" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
        </pattern>
      </defs>

      <rect width="1000" height="340" fill="url(#wall-celeste)" />
      <rect y="340" width="1000" height="120" fill="url(#floor-celeste)" />
      <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />

      <image className="window-day" href="/img/room-window.svg" x="760" y="50" width="200" height="211" />
      <image className="window-night" href="/img/room-window-night.svg" x="760" y="50" width="200" height="211" />
      <rect x="742" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" strokeWidth="3" />

      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
        <rect x="820" y="372" width="60" height="60" fill="#e63946" />
        <rect x="884" y="372" width="60" height="60" fill="#ffd23f" />
        <rect x="852" y="312" width="60" height="60" fill="#4bb04a" />
        <text x="850" y="416" textAnchor="middle" fontSize="34" fontWeight="800" fill="#fff" stroke="none">A</text>
        <text x="914" y="416" textAnchor="middle" fontSize="34" fontWeight="800" fill="#1a1a1a" stroke="none">B</text>
        <text x="882" y="356" textAnchor="middle" fontSize="34" fontWeight="800" fill="#fff" stroke="none">C</text>
      </g>

      <image className="char" href="/img/avatar-celeste.png" x="370" y="54" width="260" height="338" />

      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
        <rect x="234" y="340" width="520" height="120" fill="url(#bars-celeste)" stroke="none" />
        <rect x="222" y="322" width="544" height="20" rx="10" fill="#fff" />
        <rect x="222" y="440" width="544" height="16" rx="8" fill="#fff" />
        <rect x="216" y="296" width="24" height="168" rx="10" fill="#fff" />
        <rect x="748" y="296" width="24" height="168" rx="10" fill="#fff" />
        <circle cx="228" cy="292" r="14" fill="#ffb3d1" />
        <circle cx="760" cy="292" r="14" fill="#ffb3d1" />
      </g>
    </svg>
  );

  return (
    <RoomLayout roomClass="celeste" stage={escenarioCeleste} perfil={DATOS_CELESTE}>
      <GitHubProjects username="mcdileonardo-alt" />
      <CelesteJuego />
    </RoomLayout>
  );
}