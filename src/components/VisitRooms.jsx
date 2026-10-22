import React from 'react';
import { Link } from 'react-router-dom';

const INTEGRANTES = [
  { id: 'ignacio', nombre: 'Ignacio', url: '/ignacio', avatar: '/img/avatar-ignacio.png' },
  { id: 'ester', nombre: 'Ester', url: '/ester', avatar: '/img/avatar-ester.png' },
  { id: 'eliana', nombre: 'Eliana', url: '/eliana', avatar: '/img/avatar-eliana.png' },
  { id: 'celeste', nombre: 'Celeste', url: '/celeste', avatar: '/img/avatar-celeste.png' },
];

export default function VisitRooms({ currentRoomId }) {
  // Filtra para no mostrar el botón de la habitación actual
  const otros = INTEGRANTES.filter((item) => item.id !== currentRoomId);

  return (
    <nav className="visit" aria-label="Otras habitaciones">
      <h2>Visitá otras habitaciones</h2>
      <ul>
        {otros.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>
              <img className={`avatar ${item.id}`} src={item.avatar} alt="" />
              {item.nombre}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/bitacora">
            <img className="avatar plant-icon" src="/img/tower.svg" alt="" />
            Bitácora
          </Link>
        </li>
      </ul>
    </nav>
  );
}