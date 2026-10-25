import React, { useState, useEffect } from 'react';
import listaPersonajes from '../data/personajes.json';

export default function BuscadorPersonaje() {
    const [busqueda, setBusqueda] = useState('');
    const [personajeId, setPersonajeId] = useState('');

    // Estados para la llamada a la API 
    const [personajeApi, setPersonajeApi] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // Filtrar del JSON únicamente cuando hay 3 o más letras 
    const nombresCoincidentes = busqueda.trim().length >= 3
        ? listaPersonajes.filter((p) =>
            p.name.toLowerCase().includes(busqueda.toLowerCase())
        )
        : [];

    // Función para consumir la API al seleccionar un personaje 
    const consultarApi = (id) => {
        if (!id) return;
        setCargando(true);
        setError(null);
        setPersonajeApi(null);

        fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('No se pudo conectar con Springfield');
                return res.json();
            })
            .then((data) => {
                setPersonajeApi(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setCargando(false);

            });
    };

    // Manejar cambio en el desplegable 
    const handleSelectChange = (e) => {
        const idSeleccionado = e.target.value;
        setPersonajeId(idSeleccionado);
        consultarApi(idSeleccionado);
    };

    return (
        <section className="panel-directorio">
            <h2>🍩 Buscador de Habitantes de Springfield</h2>

            {/* Controles de Búsqueda */}
            <div className="buscador-controles">
                <label htmlFor="input-nombre">Escribí el nombre del personaje: </label>
                <input
                    id="input-nombre"
                    type="text"
                    placeholder="Ej.Simpsons, Homer, Edna..."
                    value={busqueda}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                        setPersonajeId(''); // Resetear selección previa al escribir 
                    }}
                />


                {/* Mensaje guía si hay menos de 3 letras */}
                {busqueda.trim().length > 0 && busqueda.trim().length < 3 && (
                    <p><small className="texto-ayuda">Ingresá al menos 3 letras para desplegar coincidencias.</small></p>
                )}

                {/* Desplegable activado con 3 o más letras */}
                {busqueda.trim().length >= 3 && (
                    <div className="desplegable-grupo">
                        <label htmlFor="select-personaje">Elegí el personaje: </label>
                        <select
                            id="select-personaje"
                            value={personajeId}
                            onChange={handleSelectChange}
                        >
                            <option value="">
                                {nombresCoincidentes.length > 0
                                    ? `-- ${nombresCoincidentes.length} personaje(s) encontrado(s) --`
                                    : '-- Sin coincidencias en el índice --'}
                            </option>
                            {nombresCoincidentes.map((p) => (
                                <option value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {/* Visualización de la API con manejo de Loading, Error y Éxito */}
            <div className="resultado-api">
                {cargando && (
                    <div className="estado-cargando">
                        <span className="donut-spin">🍩</span>
                        <p>Buscando en los archivos de Springfield...</p>
                    </div>
                )}

                {error && (
                    <div className="estado-error">
                        <p>¡D'oh! {error}</p>
                        <button type="button" onClick={() => consultarApi(personajeId)}>
                            Reintentar
                        </button>
                    </div>)}

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
                                <p><strong>Estado:</strong> {personajeApi.status}</p>
                            )} {personajeApi.phrases && personajeApi.phrases.length > 0 && (
                                <p><strong>Frase:</strong>
                                <blockquote className="frase-personaje">
                                    "{personajeApi.phrases[0]}"
                                </blockquote></p>
                            )}
                        </div>
                    </article>
                )}
            </div>
        </section>
    );
}