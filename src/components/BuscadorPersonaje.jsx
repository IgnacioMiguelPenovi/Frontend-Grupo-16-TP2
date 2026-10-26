import React, { useState } from 'react';
import listaPersonajes from '../data/personajes.json';
import '../styles/buscador.css';

export default function BuscadorPersonaje() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [personajeId, setPersonajeId] = useState('');

  // Estados para la API externa
  const [personajeApi, setPersonajeApi] = useState(null);
  const [fraseAleatoria, setFraseAleatoria] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // Filtrado combinado sobre los datos locales
  const personajesFiltrados = listaPersonajes.filter((p) => {
    const coincideTexto = p.name.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtroEstado === 'todos' || (p.status && p.status === filtroEstado);
    return coincideTexto && coincideEstado;
  });

  // Consumo asíncrono de la API pública
  const consultarApi = (id) => {
    if (!id) return;
    setPersonajeId(String(id));
    setCargando(true);
    setError(null);
    setPersonajeApi(null);
    setFraseAleatoria('');

    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo conectar con el servidor de Springfield');
        return res.json();
      })
      .then((data) => {
        setPersonajeApi(data);
        // Selección de frase aleatoria dentro del evento asíncrono (función pura en render)
        if (data.phrases && data.phrases.length > 0) {
          const indice = Math.floor(Math.random() * data.phrases.length);
          setFraseAleatoria(data.phrases[indice]);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  };

  const restablecerFiltros = () => {
    setBusqueda('');
    setFiltroEstado('todos');
    setPersonajeId('');
    setPersonajeApi(null);
    setError(null);
  };

  return (
    <section className="panel-directorio">
      <h2>🍩 Directorio de Habitantes de Springfield</h2>

      {/* Controles de Búsqueda y Filtro */}
      <div className="buscador-controles">
        <div className="control-campo">
          <label htmlFor="input-nombre">Buscar personaje:</label>
          <input
            id="input-nombre"
            type="search"
            placeholder="Ej. Homer, Flanders, Maude..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="control-campo">
          <label htmlFor="select-status">Filtrar por estado:</label>
          <select
            id="select-status"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value="todos">Todos los estados</option>
            <option value="Alive">Vivos (Alive)</option>
            <option value="Deceased">Fallecidos (Deceased)</option>
            <option value="Fictional">Ficticios / Especiales (Fictional)</option>
          </select>
        </div>

        {(busqueda || filtroEstado !== 'todos') && (
          <button type="button" className="btn-restablecer" onClick={restablecerFiltros}>
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Visualización de la API */}
      <div className="resultado-api">
        {cargando && (
          <div className="estado-cargando">
            <span className="donut-spin" aria-hidden="true">🍩</span>
            <p>Consultando los expedientes de Springfield...</p>
          </div>
        )}

        {error && (
          <div className="estado-error">
            <p>¡D'oh! {error}</p>
            <button type="button" onClick={() => consultarApi(personajeId)}>
              Reintentar
            </button>
          </div>
        )}

        {personajeApi && !cargando && (
          <article className="ficha-personaje">
            <h3>{personajeApi.name}</h3>
            {personajeApi.portrait_path && (
              <img
                src={`https://cdn.thesimpsonsapi.com/500${personajeApi.portrait_path}`}
                alt={personajeApi.name}
                className="foto-personaje"
              />
            )}
            <div className="datos-personaje">
              {personajeApi.occupation && (
                <p><strong>Ocupación:</strong> {personajeApi.occupation}</p>
              )}
              {personajeApi.status && (
                <p>
                  <strong>Estado:</strong>{' '}
                  <span className={`badge-status status-${personajeApi.status.toLowerCase()}`}>
                    {personajeApi.status}
                  </span>
                </p>
              )}
              {fraseAleatoria && (
                <div>
                  <strong>Frase clásica:</strong>
                  <blockquote className="frase-personaje">
                    "{fraseAleatoria}"
                  </blockquote>
                </div>
              )}
            </div>
          </article>
        )}
      </div>

      {/* Listado dinámico de tarjetas del JSON local */}
      <div className="listado-local-seccion">
        <p className="conteo-resultados">
          Mostrando <strong>{personajesFiltrados.length}</strong> de {listaPersonajes.length} personajes
        </p>

        {personajesFiltrados.length === 0 ? (
          <p className="sin-resultados">
            No se encontraron habitantes que coincidan con la búsqueda o el filtro.
          </p>
        ) : (
          <div className="grilla-personajes-local">
            {personajesFiltrados.map((p) => (
              <button
  key={p.id}
  type="button"
  className={`tarjeta-mini-personaje ${personajeId === String(p.id) ? 'activa' : ''}`}
  onClick={() => consultarApi(p.id)}
>
  {/* 1. ID a la izquierda */}
  <span className="mini-id">#{p.id}</span>

  {/* 2. Nombre del personaje en el centro */}
  <span className="mini-nombre">{p.name}</span>

  {/* 3. Círculo de color temático a la derecha (sin texto ni iconos) */}
  {p.status && (
    <span
      className={`punto-status status-${p.status.toLowerCase()}`}
      title={`Estado: ${p.status}`}
      aria-label={`Estado: ${p.status}`}
    />
  )}
</button>

            ))}
          </div>
        )}
      </div>
    </section>
  );
}
