import React from 'react';
import { Link } from 'react-router-dom';
import Nube from '../components/Nube';
import '../styles/base.css';
import '../styles/bitacora.css';

// Registro de trabajo: del día más reciente al más antiguo.
// Para agregar una nueva nube, solo sumá un nuevo objeto acá arriba con el siguiente n (ej: n: 6).
export const ENTRADAS_BITACORA = [
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
  return (
    <div className="log">
      <main className="smokeland">
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
        <nav className="visit" aria-label="Otras habitaciones">
          <h2>Visitá las habitaciones</h2>
          <ul>
            <li>
              <Link to="/ester">
                <img className="avatar lisa" src="/img/avatar-ester.png" alt="" />
                Ester
              </Link>
            </li>
            <li>
              <Link to="/eliana">
                <img className="avatar marge" src="/img/avatar-eliana.png" alt="" />
                Eliana
              </Link>
            </li>
            <li>
              <Link to="/celeste">
                <img className="avatar maggie" src="/img/avatar-celeste.png" alt="" />
                Celeste
              </Link>
            </li>
            <li>
              <Link to="/ignacio">
                <img className="avatar bart" src="/img/avatar-ignacio.png" alt="" />
                Ignacio
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <p>
          Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D&apos;oh!
        </p>
      </footer>
    </div>
  );
}