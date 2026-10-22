import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';
import PizarraBart from '../components/PizarraBart';
import GitHubProjects from '../components/GitHubProjects';

const DATOS_IGNACIO = {
  nombre: 'Ignacio Miguel Penovi',
  rol: 'Low level programing',
  bio: 'Me gusta ir cerca del metal: motores de juegos en C++ y Unreal, y apps multiplataforma con Kotlin.',
  chips: ['📍 Mar del Plata', '🎂 22', 'C++', 'UE', 'Kotlin', 'Compose MP'],
  peliculas: [
    { titulo: 'El Código Da Vinci', detalle: '2006' },
    { titulo: 'Knives Out', detalle: '2019' },
    { titulo: 'Interstellar', detalle: '2014' },
  ],
  discos: [
    { titulo: 'Chronologic', detalle: 'Caravan Palace' },
    { titulo: '<|°_°|>', detalle: 'Caravan Palace' },
    { titulo: 'Renaissance', detalle: 'Apashe' },
  ],
};

export default function IgnacioRoom() {
  const escenarioIgnacio = (
     <svg class="stage" viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="La habitación de Ignacio, con su escritorio, un skate y un póster de Bartman">
        <defs>
          <pattern id="wall" width="64" height="64" patternUnits="userSpaceOnUse">
            <rect width="64" height="64" fill="#5aa9e6"/>
            <circle cx="16" cy="16" r="5" fill="#7cc0f2"/><circle cx="48" cy="48" r="5" fill="#7cc0f2"/>
          </pattern>
          <pattern id="floor" width="120" height="60" patternUnits="userSpaceOnUse">
            <rect width="120" height="60" fill="#b8804f"/>
            <path d="M0 0H120M0 30H120M60 0V30M0 30V60M120 30V60" stroke="#8f5c34" stroke-width="3" fill="none"/>
          </pattern>
        </defs>

        // pared y piso
        <rect width="1000" height="340" fill="url(#wall)"/>
        <rect y="340" width="1000" height="120" fill="url(#floor)"/>
        <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>

        //ventana con cortinas
        <image className="window-day" href="/img/room-window.svg" x="70" y="50" width="200" height="211"/>
        <image className="window-night" href="/img/room-window-night.svg" x="70" y="50" width="200" height="211"/>
        <rect x="52" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" stroke-width="3"/>
        <rect x="58" y="49" width="34" height="220" rx="4" fill="#ffd23f" stroke="#1a1a1a" stroke-width="3"/>
        <rect x="248" y="49" width="34" height="220" rx="4" fill="#ffd23f" stroke="#1a1a1a" stroke-width="3"/>

        //poster de Bartman 
        <g transform="translate(735 62) rotate(3)" stroke="#1a1a1a" stroke-width="4" stroke-linejoin="round">
          <rect width="132" height="176" rx="4" fill="#ffd23f"/>
          <path d="M20 150 L66 60 L112 150 Q66 130 20 150Z" fill="#7c4dcc"/>
          <text x="66" y="40" text-anchor="middle" font-size="26" font-weight="800" fill="#e63946" stroke="none">BARTMAN</text>
          <path d="M66 82 l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2z" fill="#fff"/>
        </g>

        //skate apoyado 
        <g transform="translate(872 222) rotate(10)" stroke="#1a1a1a" stroke-width="4">
          <rect x="-22" y="0" width="44" height="176" rx="22" fill="#e63946"/>
          <rect x="-8" y="26" width="16" height="124" rx="8" fill="#ffd23f"/>
          <circle cx="-30" cy="34" r="8" fill="#fff"/><circle cx="-30" cy="142" r="8" fill="#fff"/>
        </g>

        // Ignacio
        <image class="char" href="img/avatar-ignacio.png" x="335" y="89" width="330" height="303"/>

        // scritorio
        <g stroke="#1a1a1a" stroke-width="4" stroke-linejoin="round">
          <path d="M276 326 h44 l-6 52 h-32 z" fill="#e63946"/>
          <path d="M298 326 l12 -32" stroke-width="5" fill="none" stroke-linecap="round"/>
          <rect x="676" y="352" width="76" height="26" fill="#4bb04a"/>
          <rect x="684" y="328" width="62" height="24" fill="#ffd23f"/>
          <g transform="translate(600 336) rotate(-7)">
            <rect width="68" height="44" fill="#fff"/>
            <text x="34" y="35" text-anchor="middle" font-size="34" font-weight="800" fill="#e63946" stroke="none">F</text>
          </g>
          <rect x="236" y="378" width="528" height="26" rx="6" fill="#b5764a"/>
          <rect x="252" y="404" width="496" height="60" fill="#8b5a2b"/>
          <rect x="272" y="416" width="200" height="38" rx="4" fill="#a06a3a"/>
          <rect x="528" y="416" width="200" height="38" rx="4" fill="#a06a3a"/>
          <circle cx="372" cy="435" r="6" fill="#ffd23f"/><circle cx="628" cy="435" r="6" fill="#ffd23f"/>
        </g>
      </svg>
  );

  return (
    <RoomLayout roomClass="ignacio" stage={escenarioIgnacio} perfil={DATOS_IGNACIO}>
      <GitHubProjects username={"IgnacioMiguelPenovi "}/>
       <PizarraBart/>
    </RoomLayout>
  );
}