import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nube from '../components/Nube';
import NightModeToggle from '../components/NightModeToggle';
import '../styles/base.css';
import '../styles/bitacora.css';

// Registro de trabajo: del día más reciente al más antiguo.
// Para agregar una nueva nube, solo sumá un nuevo objeto acá arriba con el siguiente n (ej: n: 6).
export const ENTRADAS_BITACORA = [
    {
    n: 11,
    dia: 'Domingo',
    fecha: '25 oct 2026',
    datetime: '2026-10-25',
    titulo: 'Arbol de renderizado ',
    descripcion: 'Se agregó el esquema de la jerarquía de componentes.'
   },
  {
    n: 10,
    dia: 'Viernes',
    fecha: '23 oct 2026',
    datetime: '2026-10-23',
    titulo: 'Descubrí información sobre tu personaje favorito',
    descripcion: 'Se agregó el buscador de personajes y modal de directorio.'
   },
   {
    n: 9,
    dia: 'Miércoles',
    fecha: '21 oct 2026',
    datetime: '2026-10-21',
    titulo: '¿Preferís la noche o el día?',
    descripcion: 'Se agregó el modo noche/día en la SPA.'
   },
   {
    n: 8,
    dia: 'Viernes',
    fecha: '16 oct 2026',
    datetime: '2026-10-16',
    titulo: 'Usuarios',
    descripcion: 'Se terminaron de añadir las páginas faltantes y la bitácora.'
   },
   {
    n: 7,
    dia: 'Miércoles',
    fecha: '14 oct 2026',
    datetime: '2026-10-14',
    titulo: 'Migración completa',
    descripcion: 'Se completó la migración de la mayoría de la página. Además se terminó de implementar la sidebar y la navegación.'
   },
    {
    n: 6,
    dia: 'Lunes',
    fecha: '12 oct 2026',
    datetime: '2026-10-12',
    titulo: 'Reconstrucción',
    descripcion: 'Se empezó la migración de la página para cumplir los requisitos del TP2.'
   },
  {
    n: 5,
    dia: 'Domingo',
    fecha: '27 sep 2026',
    datetime: '2026-09-27',
    titulo: 'Entrega de la landing',
    descripcion: 'Finalizamos el trabajo sobre la landing page y la entregamos.',
  },
  {
    n: 4,
    dia: 'Viernes',
    fecha: '25 sep 2026',
    datetime: '2026-09-25',
    titulo: 'Avance y ajustes',
    descripcion:
      'Continuamos con el desarrollo y sumamos nuevos elementos a la página. En la reunión del día terminamos de definir algunos detalles.',
  },
  {
    n: 3,
    dia: 'Jueves',
    fecha: '24 sep 2026',
    datetime: '2026-09-24',
    titulo: 'Repositorio y ramas',
    descripcion:
      'Subimos los archivos al repositorio y cada integrante comenzó a trabajar en su propia página desde una branch personal.',
  },
  {
    n: 2,
    dia: 'Miércoles',
    fecha: '23 sep 2026',
    datetime: '2026-09-23',
    titulo: 'Inicio del desarrollo',
    descripcion:
      'Nos reunimos y comenzamos a programar la página, tomando ideas de los distintos templates que había realizado cada integrante.',
  },
  {
    n: 1,
    dia: 'Martes',
    fecha: '22 sep 2026',
    datetime: '2026-09-22',
    titulo: 'Definición de la propuesta',
    descripcion:
      'Nos reunimos para definir el diseño de la página, la temática y su estructura.',
  },
];

export default function Bitacora() {
  const [isNight, setIsNight] = useState(() => {
    try {
      return localStorage.getItem('donuts-code:night-mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleNight = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    try {
      localStorage.setItem('donuts-code:night-mode', String(nextNight));
    } catch {
      // Ignorar si el almacenamiento local no está disponible
    }
  };

  return (
    <div className={`log ${isNight ? 'is-night' : ''}`}>
      <main className="smokeland">
        <div className="log-mode-control">
          <NightModeToggle className="log-mode-toggle" isNight={isNight} onToggle={toggleNight} />
        </div>
        <section className="log-hero">
          <h1 className="simpsons-title">Bitácora</h1>
          <p>
            Cada nube de humo que sale de la chimenea es un día de trabajo. La más reciente sube
            más alto: bajá hasta la torre para ver cómo empezó todo.
          </p>
        </section>

        <ol
          className="smoke-trail"
          aria-label="Registro de trabajo, del día más reciente al más antiguo"
        >
          {ENTRADAS_BITACORA.map((entrada) => (
            <Nube key={entrada.n} {...entrada} />
          ))}
        </ol>

        <div className="plant-base">
          <span className="vent" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <img
            src="/img/tower.svg"
            alt="Torre de enfriamiento de la Central Nuclear de Springfield"
          />
          <span className="sign pill">Central Nuclear · Springfield</span>
        </div>
        <div className="ground" aria-hidden="true"></div>
      </main>
      <footer className="log-foot">
  
        <br />
        <p>
          Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D&apos;oh!
        </p>
      </footer>
    </div>
  );
}
