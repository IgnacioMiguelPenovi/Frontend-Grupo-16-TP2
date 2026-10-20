import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';

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
    // Su svg con el escenario y su icon
    const escenarioEliana = (
      <title></title>
    );
  return (
    <RoomLayout roomClass="eliana" stage={escenarioEliana} perfil={DATOS_ELIANA}>
       // Su js con el juego
    </RoomLayout>
  );
}