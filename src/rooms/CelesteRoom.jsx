import React, { useState } from 'react';
import RoomLayout from '../components/RoomLayout';
import '../styles/room.css';

const DATOS_CELESTE = {
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

export default function CelesteRoom() {
    // Su svg con el escenario y su icon
    const escenarioCeleste = (
      <title></title>
    );
  return (
    <RoomLayout roomClass="celeste" stage={escenarioCeleste} perfil={DATOS_CELESTE}>
       // Su js con el juego
    </RoomLayout>
  );
}