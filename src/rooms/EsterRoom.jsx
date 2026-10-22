import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';
import GitHubProjects from '../components/GitHubProjects';

const DATOS_ESTER = {
  nombre: 'Ester Mosquera',
  rol: 'Web Design · Tech Reviewer',
  bio: 'Código limpio, tests que pasan y una buena dona glaseada cuando el deploy sale bien. Es la que sabe qué hace cada función… y por qué no debería tocarla nadie.',
  chips: ['📍 CABA', '🎂 46', 'Diseño y Prototipado', 'Python', 'Front', 'IA'],
  peliculas: [
    { titulo: 'Sinister', detalle: '2012 · ensayar hasta sangrar los dedos' },
    { titulo: 'Insidius', detalle: '2010 · quedarse sin aire cuando te cae la ficha' },
    { titulo: 'El Diario de Bridget Jones', detalle: '2001 · y a vivir la vida!' },
  ],
  discos: [
    { titulo: 'Dynamite', detalle: 'Jamiroquai' },
    { titulo: 'Hit Me Hard and Soft', detalle: 'Billie Eilish' },
    { titulo: 'MTV Unplugged in New York', detalle: 'Nirvana' },
  ],
};

const DATOS_CURIOSOS = [
  'Dato curioso: el primer "Hola, mundo" se publicó en 1972.',
  'Dato curioso: CSS cumplió su primera versión estable en 1996.',
  'Dato curioso: Git fue creado por Linus Torvalds en apenas dos semanas.',
  'Dato curioso: la primera página web sigue online desde 1991.',
  'Dato curioso: "bug" se usa desde que encontraron un insecto real en una computadora en 1947.',
];

export default function EsterRoom() {
  const [datoCurioso, setDatoCurioso] = useState('Esperando un dato curioso...');

  const mostrarDatoEster = () => {
    const random = DATOS_CURIOSOS[Math.floor(Math.random() * DATOS_CURIOSOS.length)];
    setDatoCurioso(`🎷 ${random}`);
  };

  // Escenario SVG de Ester
  const escenarioEster = (
    <svg
      className="stage"
      viewBox="0 0 1000 460"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="La habitación de Ester, con su escritorio, un saxofón y una biblioteca"
    >
      <defs>
        <pattern id="wall" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="#b39ddb" />
          <path d="M16 8 l3 7 7 1 -5 5 2 7 -7 -4 -7 4 2 -7 -5 -5 7 -1z" fill="#cbbaea" />
          <path d="M48 40 l3 7 7 1 -5 5 2 7 -7 -4 -7 4 2 -7 -5 -5 7 -1z" fill="#cbbaea" />
        </pattern>
        <pattern id="floor" width="120" height="60" patternUnits="userSpaceOnUse">
          <rect width="120" height="60" fill="#a9724a" />
          <path d="M0 0H120M0 30H120M60 0V30M0 30V60M120 30V60" stroke="#82502d" strokeWidth="3" fill="none" />
        </pattern>
      </defs>
      <rect width="1000" height="340" fill="url(#wall)" />
      <rect y="340" width="1000" height="120" fill="url(#floor)" />
      <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />

      {/* Biblioteca */}
      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
        <rect x="40" y="36" width="200" height="292" fill="#8b5a2b" />
        <rect x="54" y="50" width="172" height="264" fill="#5a3a2e" />
        <g strokeWidth="2">
          <rect x="60" y="76" width="18" height="64" fill="#e63946" />
          <rect x="78" y="88" width="14" height="52" fill="#ffd23f" />
          <rect x="92" y="70" width="20" height="70" fill="#4a8fe0" />
          <rect x="112" y="82" width="16" height="58" fill="#4bb04a" />
          <rect x="128" y="74" width="22" height="66" fill="#ff8fb8" />
          <rect x="150" y="90" width="16" height="50" fill="#fff" />
          <rect x="166" y="78" width="18" height="62" fill="#e63946" />
          <rect x="184" y="84" width="14" height="56" fill="#ffd23f" />
          <rect x="60" y="168" width="16" height="60" fill="#4bb04a" />
          <rect x="76" y="156" width="20" height="72" fill="#fff" />
          <rect x="96" y="174" width="14" height="54" fill="#e63946" />
          <rect x="110" y="164" width="18" height="64" fill="#4a8fe0" />
          <rect x="128" y="170" width="22" height="58" fill="#ffd23f" />
          <rect x="150" y="160" width="16" height="68" fill="#ff8fb8" />
          <rect x="166" y="178" width="18" height="50" fill="#4bb04a" />
          <rect x="184" y="168" width="14" height="60" fill="#4a8fe0" />
          <rect x="60" y="246" width="20" height="66" fill="#ffd23f" />
          <rect x="80" y="258" width="16" height="54" fill="#e63946" />
          <rect x="96" y="240" width="18" height="72" fill="#4a8fe0" />
          <rect x="114" y="254" width="14" height="58" fill="#fff" />
          <rect x="128" y="250" width="20" height="62" fill="#4bb04a" />
          <rect x="148" y="242" width="16" height="70" fill="#e63946" />
          <rect x="164" y="260" width="22" height="52" fill="#ff8fb8" />
          <rect x="186" y="248" width="14" height="64" fill="#ffd23f" />
        </g>
        <path d="M54 142H226M54 230H226" stroke="#8b5a2b" strokeWidth="8" />
      </g>

      {/* Ventana */}
      <image className="window-day" href="/img/room-window.svg" x="760" y="50" width="200" height="211" />
      <image className="window-night" href="/img/room-window-night.svg" x="760" y="50" width="200" height="211" />
      <rect x="742" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="748" y="49" width="34" height="220" rx="4" fill="#ff8fb8" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="938" y="49" width="34" height="220" rx="4" fill="#ff8fb8" stroke="#1a1a1a" strokeWidth="3" />

      {/* Saxofón */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M896 246 V350 Q896 398 852 398 Q826 398 826 372" stroke="#1a1a1a" strokeWidth="26" />
        <path d="M896 246 Q896 222 922 218" stroke="#1a1a1a" strokeWidth="20" />
        <path d="M896 246 V350 Q896 398 852 398 Q826 398 826 372" stroke="#e0a91c" strokeWidth="18" />
        <path d="M896 246 Q896 222 922 218" stroke="#e0a91c" strokeWidth="12" />
      </g>
      <ellipse cx="826" cy="366" rx="19" ry="12" fill="#f1c232" stroke="#1a1a1a" strokeWidth="4" />
      <g fill="#fff8d6" stroke="#1a1a1a" strokeWidth="2.5">
        <circle cx="896" cy="276" r="5" />
        <circle cx="896" cy="302" r="5" />
        <circle cx="896" cy="328" r="5" />
      </g>

      {/* Avatar Ester */}
      <image className="char" href="/img/avatar-ester.png" x="370" y="54" width="260" height="338" />

      {/* Escritorio */}
      <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
        <g transform="translate(580 338) rotate(5)">
          <rect width="78" height="42" fill="#fff" />
          <text x="39" y="32" textAnchor="middle" fontSize="30" fontWeight="800" fill="#1a1a1a" stroke="none">♪ ♫ ♪</text>
        </g>
        <rect x="268" y="352" width="84" height="26" fill="#4a8fe0" />
        <rect x="276" y="328" width="68" height="24" fill="#ffd23f" />
        <path d="M700 378 V332 Q700 306 730 306" fill="none" strokeWidth="6" strokeLinecap="round" />
        <path d="M716 300 h34 l10 22 h-54 z" fill="#ff8fb8" />
        <rect x="236" y="378" width="528" height="26" rx="6" fill="#9575cd" />
        <rect x="252" y="404" width="496" height="60" fill="#7e57c2" />
        <rect x="272" y="416" width="200" height="38" rx="4" fill="#9575cd" />
        <rect x="528" y="416" width="200" height="38" rx="4" fill="#9575cd" />
        <circle cx="372" cy="435" r="6" fill="#ffd23f" />
        <circle cx="628" cy="435" r="6" fill="#ffd23f" />
      </g>
    </svg>
  );

  return (
    <RoomLayout roomClass="ester" stage={escenarioEster} perfil={DATOS_ESTER}>
      <GitHubProjects username={"Kira-Blan"}/>

      {/* Widget interactivo */}
      <div className="caja-dinamica">
        <h3>Dato curioso de IT</h3>
        <p>Un botón, un dato de cultura general sobre tecnología. Ideal para cortar el silencio en una reunión de equipo.</p>
        <button
          className="boton secundario"
          id="boton-ester"
          type="button"
          onClick={mostrarDatoEster}
        >
          Mostrar dato
        </button>
        <div className="resultado-dinamico" id="resultado-ester" aria-live="polite">
          {datoCurioso}
        </div>
      </div>
    </RoomLayout>
  );
}