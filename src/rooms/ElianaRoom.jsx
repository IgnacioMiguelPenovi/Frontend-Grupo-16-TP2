import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';

const DATOS_ELIANA = {
  nombre: 'Nombre',
  rol: 'Un Dato',
  bio: 'Biografía',
  chips: ['📍 Ciudad', '🎂 Edad', 'Tecno1', 'Tecno2', 'Tecno3', 'etc'],
  peliculas: [
    { titulo: 'Película1', detalle: '0000' },
    { titulo: 'Película2', detalle: '0000' },
    { titulo: 'Película3', detalle: '0000' },
  ],
  discos: [
    { titulo: 'Disco1', detalle: 'Grupo' },
    { titulo: 'Disco1', detalle: 'Grupo' },
    { titulo: 'Disco1', detalle: 'Grupo' },
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