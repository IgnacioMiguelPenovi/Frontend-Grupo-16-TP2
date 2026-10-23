import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';
import PeinadoMarge from "../components/PeinadoMarge";
import GitHubProjects from '../components/GitHubProjects';

const DATOS_ELIANA = {
  nombre: 'Eliana Moguilevsky',
  rol: 'Tech Lead · DevOps',
  bio: 'Mantiene al equipo unido y el deploy en orden. Su peinado tiene espacio para guardar todo el backlog, y siempre hay una dona lista antes de la retro.',
  chips: ['📍 CABA', '🎂 49', 'Capacidad analítica', 'Orientación al usuario', 'Visión integral', 'Pensamiento crítico'],
  peliculas: [
    { titulo: 'Volver al futuro', detalle: '1985 · Viajes en el tiempo, aventuras y una buena dosis de humor.' },
    { titulo: 'Atrápame si puedes', detalle: '2002 · Ingenio, identidad y una persecución que nunca termina.' },
    { titulo: 'Sexto Sentido', detalle: '1999 · Una historia de misterio, emociones y un giro inolvidable.000' },
  ],
  discos: [
    { titulo: 'Elvis'+"'"+'Golden Records', detalle: 'Elvis Presley · 1958 · Rock & roll, voz, energía y clásicos de Elvis.' },
    { titulo: "'Sgt. Pepper's Lonely Hearts Club Band'", detalle: 'The Beatles · 1967 · Creatividad, experimentación y canciones que desbordan imaginación.'},
    { titulo: 'Use Your Illusion I', detalle: 'Guns n'+"' "+'Roses · 1991 · Rock potente, intensidad y grandes momentos de emoción.' },
  ],
};

export default function ElianaRoom() {

    // Escenario SVG de Eliana
const escenarioEliana = (
  <svg
    class="stage"
    viewBox="0 0 1000 460"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-label="La cocina de Marge, con la mesada, una caja de donas y una olla"
  >
    <defs>
      <pattern id="wall" width="64" height="64" patternUnits="userSpaceOnUse">
        <rect width="64" height="64" fill="#ffe08a" />
        <rect width="32" height="64" fill="#ffd66b" />
      </pattern>
      <pattern id="floor" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect width="80" height="80" fill="#f5efe0" />
        <rect width="40" height="40" fill="#d9603b" /><rect x="40" y="40" width="40" height="40" fill="#d9603b" />
      </pattern>
    </defs>
    <rect width="1000" height="340" fill="url(#wall)" />
    <rect y="340" width="1000" height="120" fill="url(#floor)" />
    <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" stroke-width="3" />

    {/* alacenas  */}
    <g stroke="#1a1a1a" stroke-width="4" stroke-linejoin="round">
      <rect x="40" y="40" width="270" height="120" rx="6" fill="#3fa79a" />
      <rect x="52" y="52" width="118" height="96" rx="4" fill="#4fbdb0" />
      <rect x="180" y="52" width="118" height="96" rx="4" fill="#4fbdb0" />
      <circle cx="160" cy="100" r="6" fill="#ffd23f" /><circle cx="190" cy="100" r="6" fill="#ffd23f" />
      {/* reloj */}
      <circle cx="425" cy="90" r="34" fill="#fff" />
      <path d="M425 90 V68 M425 90 L442 98" fill="none" stroke-width="4" stroke-linecap="round" />
    </g>

    {/* ventana */}
    <image className="window-day" href="/img/room-window.svg" x="760" y="50" width="200" height="211" />
    <image className="window-night" href="/img/room-window-night.svg" x="760" y="50" width="200" height="211" />
    <rect x="742" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" stroke-width="3" />
    <rect x="748" y="49" width="34" height="220" rx="4" fill="#4bb04a" stroke="#1a1a1a" stroke-width="3" />
    <rect x="938" y="49" width="34" height="220" rx="4" fill="#4bb04a" stroke="#1a1a1a" stroke-width="3" />

    {/* Marge */}
    <image class="char" href="img/avatar-eliana.png" x="370" y="85" width="260" height="338" />

    {/* mesada */}
    <g stroke="#1a1a1a" stroke-width="4" stroke-linejoin="round">

      {/* caja de donas */}
      <rect x="196" y="350" width="134" height="30" rx="4" fill="#f7c8dd" />
      <circle cx="222" cy="346" r="19" fill="#ffb3d1" /><circle cx="222" cy="346" r="6" fill="#f7c8dd" />
      <path d="M211 337 l5 3 M230 335 l-3 5 M231 353 l-5 -2 M213 354 l4 -4" stroke="#fff" stroke-width="3" fill="none" />
      <circle cx="262" cy="346" r="19" fill="#c98a5a" /><circle cx="262" cy="346" r="6" fill="#f7c8dd" />
      <path d="M251 337 l5 3 M270 335 l-3 5 M271 353 l-5 -2 M253 354 l4 -4" stroke="#fff" stroke-width="3" fill="none" />
      <circle cx="302" cy="346" r="19" fill="#ffb3d1" /><circle cx="302" cy="346" r="6" fill="#f7c8dd" />
      <path d="M291 337 l5 3 M310 335 l-3 5 M311 353 l-5 -2 M293 354 l4 -4" stroke="#fff" stroke-width="3" fill="none" />
      <rect x="196" y="364" width="134" height="16" rx="3" fill="#f7c8dd" />

      {/* olla */}
      <rect x="694" y="332" width="84" height="48" rx="8" fill="#b0b7c2" />
      <path d="M688 342 h-14 M784 342 h14" fill="none" stroke-width="6" stroke-linecap="round" />
      <path d="M700 322 h72 q4 0 4 10 h-80 q0 -10 4 -10z" fill="#cdd3dc" />
      <path d="M724 306 q-8 -10 0 -20 M748 306 q-8 -10 0 -20" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" />

      {/* mueble */}
      <rect x="150" y="378" width="700" height="26" rx="6" fill="#f5efe0" />
      <rect x="164" y="404" width="672" height="60" fill="#3fa79a" />
      <rect x="180" y="414" width="150" height="40" rx="4" fill="#4fbdb0" />
      <rect x="344" y="414" width="150" height="40" rx="4" fill="#4fbdb0" />
      <rect x="508" y="414" width="150" height="40" rx="4" fill="#4fbdb0" />
      <rect x="672" y="414" width="150" height="40" rx="4" fill="#4fbdb0" />
      <g fill="#ffd23f"><circle cx="316" cy="434" r="6" /><circle cx="358" cy="434" r="6" /><circle cx="644" cy="434" r="6" /><circle cx="686" cy="434" r="6" /></g>
    </g>
  </svg>
    );

  return (
    <RoomLayout roomClass="eliana" stage={escenarioEliana} perfil={DATOS_ELIANA}>
      <GitHubProjects username={"ElianaMoguilevsky"}/>
         <PeinadoMarge />
    </RoomLayout>
  );
}

