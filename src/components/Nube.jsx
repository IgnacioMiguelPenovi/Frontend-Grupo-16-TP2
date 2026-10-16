import React from 'react';

export default function Nube({
  n,
  dia,
  fecha,
  datetime,
  titulo,
  descripcion,
  children,
}) {
  return (
    <li className="puff" style={{ '--n': n }}>
      <div className="meta">
        {dia && <span className="num">{dia}</span>}
        {fecha && <time dateTime={datetime || fecha}>{fecha}</time>}
      </div>
      {titulo && <h2>{titulo}</h2>}
      {descripcion && <p>{descripcion}</p>}
      {children}
    </li>
  );
}
